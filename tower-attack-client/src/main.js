import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})