<template>
  <div>demo</div>
</template>

<script setup lang="tsx">
function save() {
  console.log('save')
}

function setBtn() {
  // return <div>确认</div>
  return []
}

defineExpose({
  save,
  setBtn,
})
</script>
