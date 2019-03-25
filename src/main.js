import Vue from 'vue'
import Buefy from 'buefy'
import PortalVue from 'portal-vue'

import App from './App.vue'
import store from './store'

import './assets/styles.scss'

Vue.use(Buefy)
Vue.use(PortalVue)

new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App),
})
