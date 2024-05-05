import { createApp } from 'vue'
import { DialogConfig } from './props'
import dialog from './dialog.vue'
import store from './store'

const appContext = {
  provides: {},
  components: {},
  directives: {},
}

const service = (options: DialogConfig = {}) => {
  const container = document.createElement('div')

  const props = {
    ...options,
    onDestroy: () => {
      App.unmount()
    },
  }

  const App = createApp(dialog, props)
  try {
    // 获取外部上下文，主要用于pinia能插件的实例化
    Object.getOwnPropertySymbols(appContext.provides)?.forEach((key) => {
      App.provide(key, appContext.provides[key])
    })
    Object.keys(appContext.components).forEach((key) => {
      App.component(key, appContext.components[key])
    })
    Object.keys(appContext.directives).forEach((key) => {
      App.directive(key, appContext.directives[key])
    })
  } catch (e) {}

  App.mount(container)
  document.body.appendChild(container.firstElementChild!)

  const instance = store.getInstance('dialog')

  return instance
}

service.initCtx = (ctx = {}) => {
  Object.assign(appContext, ctx)
}

export default service
