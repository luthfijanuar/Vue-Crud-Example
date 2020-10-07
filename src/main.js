import Vue from 'vue'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return 'Rp' + parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
})

new Vue({
  store,
  render: h => h(Shop)
}).$mount('#shop')
