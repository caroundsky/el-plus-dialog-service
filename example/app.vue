<template>
  <div @click="showDialog">弹窗服务</div>
</template>

<script setup lang="tsx">
import dialogService from 'dialog-service'
import Demo from './demo.vue'

function showDialog() {
  dialogService({
    title: '测试',
    content: () => <Demo />,

    // buttons: [
    //   {
    //     label: '确定 ',
    //     type: 'primary',
    //     onClick: ({ vm, ctx, component }) => {
    //       component.save()
    //     },
    //   },
    // ],

    // buttons: ({ vm, getFooterBtns }) => {
    //   return <div>取消</div>
    // },

    // buttons: () => {
    //   return [
    //     {
    //       label: '确定 ',
    //       type: 'primary',
    //       onClick: ({ vm, ctx, component }) => {
    //         component.save()
    //       },
    //     },
    //   ]
    // },

    buttons: ({ getFooterBtns }) => {
      return getFooterBtns(cont => cont.setBtn())
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
