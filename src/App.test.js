/**
 * Description of App.tes.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 23.01.19 9:30
 */
import Vuex from 'vuex'
import Buefy from 'buefy'
import PortalVue from 'portal-vue'

import cars from '@/store/cars'

import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from './App.vue'

const localVue = createLocalVue();
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(PortalVue)

const store = new Vuex.Store({
  modules: {
    cars
  }
})

describe('test App', () => {
  it('app works', () => {
    const wrapper = shallowMount(App, {
      localVue,
      store,
    })
  })
})
