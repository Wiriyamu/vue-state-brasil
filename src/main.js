import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuesax from 'vuesax'
import VueTimeline from '@growthbunker/vuetimeline'
import VueApexCharts from 'vue-apexcharts'

import 'vuesax/dist/vuesax.css'
import './assets/css/tailwind.css'

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#5b3cc4',
      success: '#41C7C7',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: '#222429'
    }
  }
})
Vue.component('apexchart', VueApexCharts)
Vue.use(VueTimeline)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
