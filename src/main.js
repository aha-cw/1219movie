import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css'
import EIementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(EIementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
