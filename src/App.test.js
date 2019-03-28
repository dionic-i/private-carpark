/**
 * Description of App.tes.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 23.01.19 9:30
 */
import moment from 'moment'
import Vuex from 'vuex'
import Buefy from 'buefy'
import PortalVue from 'portal-vue'

import cars from '@/store/cars'

import { shallowMount, createLocalVue } from '@vue/test-utils'
import { AppHeader } from './components/AppHeader'

import App from './App.vue'
import data from '@/data'
const { cars: carsItems, speedItems, runItems } = data

const localVue = createLocalVue();
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(PortalVue)

const store = new Vuex.Store({
  modules: {
    cars: {
      ...cars,
      ...{
        cars: carsItems,
        speedItems,
        runItems,
      }
    }
  }
})

describe('test App', () => {
  it('app works', () => {
    const wrapper = shallowMount(App, {
      localVue,
      store,
    })
    const header = wrapper.find(AppHeader)
    expect(header.attributes().date).toBe(moment().format('YYYY-MM-DD'))
    expect(header.attributes().carName).toEqual(undefined)
  })
})
