<template>
  <div style="height: 1000px">demo</div>
</template>

<script setup lang="tsx">
function save() {
  console.log('save')
}

function setBtn() {
  return <div>确认</div>
}

defineExpose({
  save,
  setBtn,
})
</script>
