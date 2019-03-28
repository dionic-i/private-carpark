import Vue from 'vue'
import PortalVue from 'portal-vue'

import { mount } from '@vue/test-utils'

import CarCard from './CarCard.vue'

Vue.use(PortalVue)

const cardFactory = (propsData = {}) => {
  const props = {
    carId: 100,
    title: 'BMW X5',
    description: 'Super Car!',
    maxSpeed: 250,
    currentRun: 20,
  }
  return mount(CarCard, {
    propsData: {
      ...props,
      ...propsData
    },
  })
}

describe('test CarCard', () => {
  it('test required props', () => {
    const wrapper = cardFactory()
    expect(wrapper.find('.content > p').text().includes('Super Car!')).toBe(true)
    expect(wrapper.find('.media-content > p').text().includes('BMW X5')).toBe(true)
    expect(wrapper.find('li:first-of-type').html()).toContain('<strong>Max скорость: </strong>250 км/ч')
    expect(wrapper.find('li:nth-of-type(2)').html()).toContain('<strong>Пробег: </strong>20 тыс. км.')
    expect(wrapper.find('div.card').classes('active')).toBe(false)
  })

  it('test isActive property', () => {
    const wrapper = cardFactory({isBooked: true})

    expect(wrapper.find('div.card').classes('active')).toBe(true)

    const link = wrapper.find('a.car-booking-toggle-button')
    expect(link.exists()).toBe(true)
    expect(link.classes('has-text-danger')).toBe(true)
    expect(link.text()).toContain('Отказаться')

    wrapper.setProps({isBooked: false})
    expect(link.classes('has-text-success')).toBe(true)
    expect(link.text()).toContain('Забронировать')
  })
})
