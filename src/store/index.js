import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import createLogger from 'vuex/dist/logger'

import cars from './cars'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    cars,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : [pathify.plugin],
})

export default store
