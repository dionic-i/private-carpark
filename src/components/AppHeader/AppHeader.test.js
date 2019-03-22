import moment from 'moment'
import { mount } from '@vue/test-utils'
import AppHeader from './AppHeader.vue'

describe('test AppHeader', () => {
  it('test title', () => {
    const wrapper = mount(AppHeader, {
      propsData: {
        title: 'Мой автопарк',
      },
    })
    expect(wrapper.html().includes('Мой автопарк')).toBe(true)
    expect(wrapper.html().includes('Машина: нет')).toBe(true)
    expect(wrapper.html().includes(moment().format('YYYY-MM-DD'))).toBe(true)
  })

  it('test class', () => {
    const wrapper = mount(AppHeader, {
      propsData: {
        title: 'Мой автопарк',
      },
    })
    expect(wrapper.classes('has-background-light')).toBe(true)
  })
})
