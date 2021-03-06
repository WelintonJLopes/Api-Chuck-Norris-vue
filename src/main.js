import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')