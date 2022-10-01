import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// criando a aplicacao vue
// criando um elemento no h
new Vue({
  render: h => h(App),
}).$mount('#app')
