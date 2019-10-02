import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronLeft, faChevronRight, faHome, faCheckCircle, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
//add search icon
library.add(faSearch)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faHome)
library.add(faCheckCircle)
library.add(faImages)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
