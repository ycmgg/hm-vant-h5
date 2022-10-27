import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant-ui'
import CartItem from '@/components/cart-item'
Vue.component('CartItem', CartItem)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
