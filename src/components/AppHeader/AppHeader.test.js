import moment from 'moment'
import { mount } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'

const today = moment().format('YYYY-MM-DD')

const headerFactory = (propsData = {}) => {
  const props = {
    title: 'Мой автопарк',
    carName: 'Lada Largus',
    date: today
  }
  return mount(AppHeader, {
    propsData: {
      ...props,
      ...propsData
    },
  })
}

describe('test AppHeader', () => {
  it('test props', () => {
    const wrapper = headerFactory()
    expect(wrapper.html().includes('Мой автопарк')).toBe(true)
    expect(wrapper.html().includes('Машина: Lada Largus')).toBe(true)
    expect(wrapper.html().includes(today)).toBe(true)
    expect(wrapper.classes('has-background-light')).toBe(true)
  })

  it('test emit events', () => {
    const wrapper = headerFactory()
    wrapper.vm.nextDay()

    const nextDay = moment(today).add(1, 'days').format('YYYY-MM-DD')
    let event = wrapper.emitted('change-date')
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([nextDay])

    const prevDay = moment(today).add(-1, 'days').format('YYYY-MM-DD')
    wrapper.vm.prevDay()
    event = wrapper.emitted('change-date')
    expect(event.length).toBe(2)
    expect(event[1]).toEqual([prevDay])
  })
})
