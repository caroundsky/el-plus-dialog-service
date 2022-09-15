# el-plus-dialog-service

基于 [Element Plus Dialog](https://element-plus.org/zh-CN/component/dialog.html) 二次封装，以服务的形式调用。

服务依赖于宿主项目的Element Plus版本，"element-plus": "2.x", "vue": "3.x"。

Tips:

 `el-plus`于2.2.16调整了dialog的class绑定方式，若宿主项目的`el-plus`低于2.2.16，此服务请安装v0.3版本。

* 安装

```bash
yarn add @caroundsky/el-plus-dialog-service
```

* 使用

```js
/**
 接受两个配置项：
 - config - 必填，参考下方props
 - appContext - 可选，应用程序上下文，主要用于解决pinia等插件使用问题
*/

import dialogService from '@caroundsky/el-plus-dialog-service'

// 若项目内未全局引入 element/el-dialog 样式，需要手动引入
import 'element-plus/es/components/dialog/style/css'

dialogService(config, appContext)

```

* 若将服务挂载到全局，并在选项式API中获得代码提示，需要在项目内xx.d.ts中声明相关变量

```ts
/**
 在选项式API中使用
*/

// main.ts 入口文件，挂载到全局$dialogService
import { createApp } from 'vue'
import dialogService from '@caroundsky/el-plus-dialog-service'
import App from './xx.vue'

const app = createApp(App)
app.config.globalProperties.$dialogService = dialogService

// xx.d.ts
export {}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dialogService: typeof import('@caroundsky/el-plus-dialog-service')['default']
  }
}

// xx.vue
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    showDialog() {
      this.$dialogService(
        {
          title: '标题',
          content: '内容',
          buttons: [
            {
              label: '确认',
              type: 'primary',
              onClick: ({ vm }) => {
                vm.hide()
              },
            },
          ],
        }
      )
    },
  },
})
```

```js
/**
 在组合式API中使用
*/
<script setup lang="tsx">
import Demo from './demo.vue'
import dialogService from '@caroundsky/el-plus-dialog-service'

function showDialog() {
  dialogService({
    title: '测试',
    height: '40vh',
    content: <Demo />,
    buttons: [
      {
        label: '确定 ',
        type: 'primary',
        onClick: ({ vm, component }) => {
          vm.hide()
        },
      },
    ],
  })
}
</script>
```

## Props

| 参数 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | --- |
| title | string \| VNode \| () => VNode | — | 标题，可返回VNode进行自定义布局 |
| content | string \| VNode \| () => VNode | — | 内容,与下方的 iframeSrc 二选一，内容的padding自行控制，组件本身不提供默认边距 |
| buttons | array<br>() => VNode \| array <br>VNode |[] | `Array`：[ { label, type, onClick }, () => { return VNode }, ... ]<br><br> `label`：按钮名<br>`type`：类型 primary / success / warning / danger / info / text<br>`...attrs`: 与 [el-button](https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7) 一致<br>`onClick`: function({ vm, ctx, component }) {}；<br><br>vm：弹窗实例，可使用 vm.close() 或者 vm.hide() 关闭弹窗， 执行close会触发beforeClose<br>ctx：按钮上下文<br> component： content 实例，若为Vnode，实例内使用`defineExpose` 暴露出相应方法来调用<br><br>`Fn`：<br>({ vm, component, getFooterBtns }) => {  返回Array / VNode }<br>如果想通过content组件本身来生成按钮，可以使用`getFooterBtns`参数，会携带组件实例，通过调用实例的自定义方法，该方法返回上述的Array或者Vnode即可<br>`return getFooterBtns(cont => cont['自定义方法']())`|
| width | string | 520px | 宽度 |
| height | string | — | 高度，建议用vh做单位达到自适应效果 |
| top | string | — | 距离顶部距离 |
| class | string | — | 自定义class `v0.4之前版本，请使用customClass` |
| canModalClose | boolean | false | 是否可Esc或点击弹窗外区域关闭弹窗 |
| zIndex | number | 1000 | z-index值 |
| iframeSrc | string | — | iframe 地址 |
| fullscreen | boolean | false | 默认最大化打开，与下方的 Enable 二选一 |
| fullScreenEnable | boolean | true | 允许最大化 |
| resize | boolean | false | 允许通过右下角自由缩放 |
| beforeClose |fn|—|关闭前执行，此方法会阻止弹窗关闭，(vm, done) => {}|
| afterOpen |fn|—|打开后执行，(vm) => {}|
| afterClose |fn|—|关闭后执行，(vm) => {}|

## Methods 实例方法

| 方法名 | 说明 |
| :---: | --- |
| hide | 关闭当前弹窗 |
| close | 关闭当前弹窗,会触发beforeClose方法 |
| title | 标题 |
| buttons | 按钮组 |
| fullscreen | 全屏 |
| height | 高度 |
| width | 宽度 |

## appContext

参数为可选值，若项目内使用pinia作为store实例，需要配置该参数

```js
// 在你的 setup 方法中
const { appContext } = getCurrentInstance()!
dialogService({}, appContext)

// 在选项式中
dialogService({}, this.$.appContext)
```
