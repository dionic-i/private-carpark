import { mount } from '@vue/test-utils'
import CarCard from './CarCard.vue'

const cardFactory = (propsData = {}) => {
  const props = {
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
    const wrapper = cardFactory({isActive: true})

    expect(wrapper.find('div.card').classes('active')).toBe(true)

    const link = wrapper.find('.card-footer > a')
    expect(link.exists()).toBe(true)
    expect(link.classes('has-text-danger')).toBe(true)
    expect(link.text()).toContain('Отказаться')

    wrapper.setProps({isActive: false})
    expect(link.classes('has-text-success')).toBe(true)
    expect(link.text()).toContain('Забронировать')
  })

  it('test linkText computed property', () => {
    const localThis = { isActive: false }
    const fn = CarCard.computed.linkText

    expect(fn.call(localThis)).toBe('Забронировать')

    localThis.isActive = true
    expect(fn.call(localThis)).toBe('Отказаться')
  })

  it('test emit events', () => {
    const wrapper = cardFactory()
    wrapper.vm.toggleBooking()

    let event = wrapper.emitted('toggle-booking')
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([true])

    wrapper.setProps({isActive: true})
    wrapper.vm.toggleBooking()
    event = wrapper.emitted('toggle-booking')
    expect(event.length).toBe(2)
    expect(event[1]).toEqual([false])
  })

  it('test booking without mount', () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }

    CarCard.methods.toggleBooking.call({ $emit })
    expect(events['toggle-booking']).toEqual([true])

    CarCard.methods.toggleBooking.call({ isActive: true, $emit })
    expect(events['toggle-booking']).toEqual([false])
  })
})
