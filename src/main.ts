import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

/** Setup Theme */
import '@userfrosting/theme-pink-cupcake/less/main.less'
import PinkCupcake from '@userfrosting/theme-pink-cupcake'
app.use(PinkCupcake)

app.mount('#app')
