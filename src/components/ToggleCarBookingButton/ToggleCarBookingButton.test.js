// import Vue from 'vue'
// import Buefy from 'buefy'
// import { mount } from '@vue/test-utils'
// import CarsFilter from './CarsFilter.vue'
// import BaseSelect from '../BaseSelect/BaseSelect.vue'
import { shallowMount } from '@vue/test-utils'

import Button from './ToggleCarBookingButton.vue'

const buttonFactory = (propsData = {}) => {
  const props = {
    carId: 100,
    isAllowedBooking: true,
  }
  return shallowMount(Button, {
    propsData: {
      ...props,
      ...propsData
    },
    stubs: {
      portal: true
    }
  })
}

describe('test ToggleCarBookingButton', () => {
  it('test required props', () => {
    const wrapper = buttonFactory()
    expect(wrapper.find('div.full-width').exists()).toBe(true)
    const link = wrapper.find('div.full-width > a')
    expect(link.exists()).toBe(true)
    expect(link.classes('car-booking-toggle-button')).toBe(true)
  })

  it('test isAllowedBooking property', () => {
    const wrapper = buttonFactory()
    const link = wrapper.find('div.full-width > a')

    expect(link.exists()).toBe(true)
    expect(link.classes('has-text-success')).toBe(true)
    expect(link.text()).toContain('Забронировать')

    wrapper.setProps({isAllowedBooking: false})
    expect(link.classes('has-text-danger')).toBe(true)
    expect(link.text()).toContain('Отказаться')
  })

  it('test linkText computed property', () => {
    const localThis = { isAllowedBooking: true }
    const fn = Button.computed.linkText

    expect(fn.call(localThis)).toBe('Забронировать')

    localThis.isAllowedBooking = false
    expect(fn.call(localThis)).toBe('Отказаться')
  })
})
