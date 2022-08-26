import { useMouseInElement } from '@vueuse/core'
import { reactive } from 'vue'
import store from './store'

let mouse

export default {
  mounted(el: HTMLDivElement, binding) {
    const dialog = binding.value.dialog.dialogContentRef.$el
    mouse = reactive(useMouseInElement(dialog))
    const vm = store.getInstance('dialog')
    const minW = 260
    const minH = 64

    el.onmousedown = function(e) {
      e.preventDefault()

      // 如果content是iframe，阻止其所有事件，优化性能
      const iframe = dialog.querySelector('iframe')
      if (iframe) iframe.style.pointerEvents = 'none'

      const innerWidth = window.innerWidth
      const headerHeight = dialog.querySelector('header').offsetHeight
      const footerHeight = dialog.querySelector('footer')?.offsetHeight ?? 0

      document.onmousemove = function() {
        const { elementX, elementY, x, isOutside } = mouse

        const dialogLeftDistance = x - elementX
        const height = elementY - headerHeight - footerHeight

        const outDisable = (dialogLeftDistance <= 1 || x > innerWidth) && isOutside
        const insideDisable = elementX <= minW || height <= minH

        if (outDisable || insideDisable) return
        vm.width.value = elementX + 'px'
        vm.height.value = elementY - headerHeight - footerHeight + 'px'
      }
      document.onmouseup = function() {
        document.onmousemove = null
        if (iframe) iframe.style.pointerEvents = 'auto'
      }
    }
  },
  unmounted() {
    mouse.stop()
  },
}
