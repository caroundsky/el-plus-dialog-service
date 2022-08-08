import { createApp } from 'vue'
import type { AppContext } from 'vue'

import { DialogConfig } from './props'
import dialog from './dialog.vue'
import store from './store'

const service = (options: DialogConfig = {}, appContext?: AppContext) => {
  const container = document.createElement('div')

  const props = {
    ...options,
    onDestroy: () => {
      App.unmount()
    },
  }

  const App = createApp(dialog, props)
  if (appContext) {
    // 获取外部上下文，主要用于pinia能插件的实例化
    Object.getOwnPropertySymbols(appContext.provides)?.forEach(key => {
      App.provide(key, appContext.provides[key])
    })
  }

  App.mount(container)
  document.body.appendChild(container.firstElementChild!)

  const instance = store.getInstance('dialog')

  return instance
}

export default service
