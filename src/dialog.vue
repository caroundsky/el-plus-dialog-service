<template>
  <el-dialog
    draggable
    v-model="dialogVisible"
    :class="bindClass"
    :width="width"
    :top="top"
    :z-index="zIndex"
    :fullscreen="fullscreen"
    :before-close="handleBeforeClose"
    v-on="dialogEvents"
    :close-on-click-modal="canModalClose"
    :close-on-press-escape="canModalClose"
    ref="dialog"
  >
    <template class="title" #header>
      <div v-if="titleComponent">
        <component :is="titleComponent" class="service-dialog-title" />
      </div>
      <div v-else class="service-dialog__title">
        {{ title }}
      </div>
      <div v-if="fullScreenEnable" class="service-dialog__icon" @click="handleFullScreen">
        <img :src="fullscreen ? getAssetsImages('minscreen.svg') : getAssetsImages('fullscreen.svg')" />
      </div>
    </template>

    <div ref="dialogContentWrap" class="service-dialog__content" :style="{ height }">
      <template v-if="contentComponent">
        <component ref="dialogContent" :is="isVNode(contentComponent) ? contentComponent : contentComponent()" />
      </template>
      <template v-else>
        {{ content }}
      </template>
      <div v-resize="{ dialog, width }" :class="{ 'service-dialog__resize': true, hidden: !resize || fullscreen }" />
    </div>

    <template #footer v-if="isVNode(_button) || _button?.length !== 0">
      <div class="service-dialog__footer">
        <component v-if="isVNode(_button)" :is="_button" />
        <component v-else v-for="item in _button" :is="generateBtn(item)" />
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="tsx" name="DialogService">
import { ElDialog, ElButton, ElLoading } from 'element-plus'

import { ref, computed, watch, onMounted, isVNode, nextTick } from 'vue'
import { dialogProps } from './props'
import type { componentProps, BtnConfig, buttonPropsParams, getFooterBtnsFn } from './props'

import { getAssetsImages } from './utils'
import { isPlainObject, isFunction, isArray } from 'lodash'
import store from './store'

import Vresize from './resize'

const vResize = Vresize

const dialogVisible = ref(false)
const dialog = ref<HTMLDivElement>()

let iframeLoading: any

const _height = ref('')

const emit = defineEmits({
  destroy: () => true,
})

let vm: any = null

const props = defineProps(dialogProps)
const {
  content,
  fullScreenEnable,
  iframeSrc,
  top,
  zIndex,
  beforeClose,
  afterClose,
  afterOpen,
  canModalClose,
  resize,
} = props

const fullscreen = ref(props.fullscreen)
const width = ref(props.width)
const height = ref(props.height)
const title = ref(props.title)
const buttons = ref(props.buttons)

const bindClass = ['service-dialog', props.class, { fullscreen: fullscreen.value, 'is-iframe': !!iframeSrc }]

const dialogContent = ref<HTMLDivElement>()
const dialogContentWrap = ref<HTMLDivElement>()

const dialogEvents = {
  closed: () => {
    emit('destroy')
    isFunction(afterClose) && afterClose(vm)
  },
  opened: () => {
    isFunction(afterOpen) && afterOpen(vm)
  },
}

const titleComponent = getComponent(title.value)
const contentComponent = getComponent(content)
const _button = computed(() => {
  if (isVNode(buttons.value)) {
    return buttons.value
  }

  if (isFunction(buttons.value)) {
    return buttons.value({
      vm: store.getInstance('dialog'),
      component: dialogContent.value,
      getFooterBtns,
    })
  }

  if (isArray(buttons.value)) {
    let btns: buttonPropsParams[] = []
    buttons.value.forEach((item: buttonPropsParams) => {
      if (typeof item === 'string') {
        console.warn('请传入正确的 buttons 参数')
      } else if (isPlainObject(item) || isFunction(item) || isVNode(item)) {
        btns.push(item)
      }
    })
    return btns
  }
})

watch(
  () => fullscreen.value,
  (val) => {
    height.value = val ? '100%' : _height.value
  }
)

watch(
  () => height.value,
  (val) => {
    if (fullscreen.value) return
    _height.value = val
  },
  { immediate: true }
)

function handleFullScreen() {
  fullscreen.value = !fullscreen.value
}

function getComponent(data: componentProps) {
  return computed(() => {
    if (isFunction(data)) {
      return data.bind(null, vm)
    }

    if (isVNode(data)) {
      return data
    }

    if (!data && iframeSrc) {
      return (
        <iframe
          src={iframeSrc}
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="auto"
          onReady
          onLoad={() => {
            iframeLoading.close()
          }}
        />
      )
    }
  })
}

function generateBtn(btn: buttonPropsParams) {
  if (isVNode(btn)) {
    return btn
  }

  if (isFunction(btn)) {
    return btn({
      vm,
      ctx: _button,
      component: dialogContent.value,
    })
  }

  const { label, type, ...props } = btn
  const btnProps = { ...props, onClick: () => handleBtnClick(btn) }
  return (
    <ElButton type={type} {...btnProps}>
      {label}
    </ElButton>
  )
}

function handleBtnClick(btn: BtnConfig) {
  if (isFunction(btn.onClick)) {
    btn.onClick({
      vm,
      ctx: btn,
      component: dialogContent.value,
    })
  }
}

function getFooterBtns(cb: getFooterBtnsFn) {
  setTimeout(() => {
    cb && (buttons.value = cb(dialogContent.value))
  })
}

function hide() {
  dialogVisible.value = false
}

function close() {
  if (isFunction(beforeClose)) {
    beforeClose(vm, hide)
  } else {
    hide()
  }
}

function handleBeforeClose(done: any) {
  if (isFunction(beforeClose)) {
    beforeClose(vm, done)
  } else {
    done()
  }
}

const exposeData = {
  hide,
  close,
  title,
  buttons,
  fullscreen,
  height,
  width
}
defineExpose(exposeData)

store.setInstance('dialog', exposeData)

onMounted(() => {
  dialogVisible.value = true

  nextTick(() => {
    vm = store.getInstance('dialog')
  })
  if (!iframeSrc) return
  setTimeout(() => {
    iframeLoading = ElLoading.service({
      target: dialogContentWrap.value
    })
  }, 0)
})
</script>

<style lang="less">
.service-dialog {
  .el-dialog {
    max-width: 90%;
    &--center .el-dialog__title {
      left: 50% !important;
      transform: translateX(-50%);
    }
  }

  &.is-fullscreen {
    max-width: initial;
    display: flex;
    flex-direction: column;

    .el-dialog__body {
      flex-grow: 1;
      overflow: auto;
    }
  }

  &__title {
    font-size: 16px;
    position: absolute;
    top: 11px;
    left: 20px;
  }

  &__icon {
    position: absolute;
    right: 36px;
    top: 14px;
    line-height: 1;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
    & > img {
      width: 1em;
      height: 1em;
    }
  }

  .el-dialog__header {
    padding: 10px 15px;
    margin-right: 0;
    height: 24px;
    box-sizing: content-box;
    border-bottom: 1px solid #ebeef5;
    .el-dialog__headerbtn {
      top: 15px;
      right: 13px;
      width: auto;
      height: auto;
      & > i {
        color: #333;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
    color: #333;
  }
  .el-dialog__footer {
    padding: 0;
  }

  &.is-iframe {
    .service-dialog__content {
      padding: 0;
      line-height: 0;
    }
  }
  &__content {
    line-height: 1.4;
    box-sizing: border-box;
    overflow: auto;
  }

  &__footer {
    padding: 10px 20px;
    border-top: 1px solid #ebeef5;
    & > * {
      display: inline-block;
    }
    .el-button {
      font-size: 12px;
    }
  }

  &__resize {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 13px;
    height: 13px;
    overflow: hidden;
    cursor: nw-resize;
    user-select: none;
    opacity: 0;
    &.hidden {
      display: none;
    }
    &::after {
      content: '';
      opacity: 0.4;
      transform: rotate(135deg);
      position: absolute;
      right: -3px;
      bottom: 2px;
      width: 24px;
      height: 1px;
      background: #000;
    }
    &::before {
      content: '';
      opacity: 0.4;
      transform: rotate(135deg);
      position: absolute;
      right: -6px;
      bottom: 0px;
      width: 22px;
      height: 1px;
      background: #000;
    }
  }
}
</style>
