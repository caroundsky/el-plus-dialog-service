<template>
  <div @click="showDialog">弹窗服务</div>
</template>

<script setup lang="tsx">
import useDialog from 'dialog-service'
import Demo from './demo.vue'

function showDialog() {
  useDialog({
    title: '测试',
    height: '30vh',
    // iframeSrc: 'https://juejin.cn/post/6918921604160290830',
    content: () => <Demo />,

    // buttons: ({ vm, getFooterBtns }) => {
    //   return getFooterBtns(cont => cont.setBtn())
    // },

    // buttons: ({ vm, getFooterBtns }) => {
    //   return <div>取消</div>
    // },

    buttons: () => {
      return [
        {
          label: '确定 ',
          type: 'primary',
          onClick: ({ vm, ctx, component }) => {
            component.save()
          },
        },
      ]
    },
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
