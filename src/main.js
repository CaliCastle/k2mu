import './styles/tailwind.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      links: {
        game: {
          itch: 'https://vvspaceship.itch.io/knife-2-meat-u'
        }
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
