import { createApp } from 'vue'
import App from './app.vue'
import useDialog from 'dialog-service'

const app = createApp(App)
app.mount('#app')

useDialog.initCtx(app._context)
