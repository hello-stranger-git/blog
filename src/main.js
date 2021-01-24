import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  * as filters from './filter/index'

Vue.config.productionTip = false
Object.keys(filters).forEach(key=>{//加载所有过滤器
  Vue.filter(key,filters[key]);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
