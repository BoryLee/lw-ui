import Vue from 'vue'
import App from './App.vue'
import LwUI from '../packages'

Vue.config.productionTip = false

Vue.use(LwUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
