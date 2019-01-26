import Vue from 'vue'
import Buefy from 'buefy'
import { mount } from '@vue/test-utils'
import CarsFilter from './CarsFilter.vue'
import BaseSelect from '../BaseSelect/BaseSelect.vue'

Vue.use(Buefy)

describe('test CarsFilter', () => {
  it('test html', () => {
    const wrapper = mount(CarsFilter, {
      stubs: {
        BaseSelect: true,
      },
    })

    expect(wrapper.find('h2').text()).toContain('Фильтр')
    expect(wrapper.findAll('label').length).toBe(2)
    expect(wrapper.findAll(BaseSelect).length).toBe(2)
    expect(wrapper.findAll('label').at(0).text()).toBe('Max скорость, км/ч')
    expect(wrapper.findAll('label').at(0).text()).toBe('Пробег, тыс. км.')
  })

  it('test methods', () => {
    const localThis = { speedValue: 0, runValue: 0 }
    CarsFilter.methods.onChangeMaxSpeed.call(localThis, 2)
    expect(localThis.speedValue).toEqual(2)

    CarsFilter.methods.onChangeCurrentRun.call(localThis, 2)
    expect(localThis.speedValue).toEqual(2)
  })
})
