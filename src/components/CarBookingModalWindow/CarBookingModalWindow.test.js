// import Vue from 'vue'
// import Buefy from 'buefy'
// import { mount } from '@vue/test-utils'
// import CarsFilter from './CarsFilter.vue'
// import BaseSelect from '../BaseSelect/BaseSelect.vue'
import moment from 'moment'

import { mount } from '@vue/test-utils'

import Modal from './CarBookingModalWindow.vue'

const modalFactory = (propsData = {}) => {
  const props = {
    carId: 100,
    title: 'Lada cross',
    bookedDays: [],
    firstAllowedDay: new Date(),
  }
  return mount(Modal, {
    propsData: {
      ...props,
      ...propsData
    },
    stubs: {
      ['b-field']: true,
      ['b-modal']: true,
      ['date-picker']: true,
    }
  })
}

describe('test CarBookingModalWindow', () => {
  it('test template and required props', () => {
    const wrapper = modalFactory()
    expect(wrapper.find('.modal-card').exists()).toBe(true)
    expect(wrapper.find('.modal-card-head').exists()).toBe(true)
    expect(wrapper.find('.modal-card-body').exists()).toBe(true)
    expect(wrapper.find('.modal-card-foot').exists()).toBe(true)
    expect(wrapper.find('.booking-buttons').exists()).toBe(true)
    expect(wrapper.find('.modal-card-head').text()).toContain('Lada cross')
  })

  it('test emit events', () => {
    const wrapper = modalFactory()
    wrapper.vm.onConfirm()

    let event = wrapper.emitted('confirm')
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([moment().format('YYYY-MM-DD')])

    wrapper.vm.onClose()
    event = wrapper.emitted('close')
    expect(event.length).toBe(1)
  })
})
