import Vue from 'vue'
import Buefy from 'buefy'
import { mount } from '@vue/test-utils'
import BaseSelect from './BaseSelect.vue'

Vue.use(Buefy)

const items = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
]

const selectFactory = (propsData = {}) => {
  const props = {
    items,
    value: 1,
  }
  return mount(BaseSelect, {
    propsData: {
      ...props,
      ...propsData
    },
  })
}

describe('test BaseSelect', () => {
  it('test html', () => {
    const wrapper = selectFactory()
    const options = wrapper.findAll('option')
    expect(options.length).toBe(2)
    expect(options.at(0).attributes().label).toEqual('1')
    expect(options.at(0).attributes().value).toEqual('1')
    expect(options.at(1).attributes().label).toEqual('2')
    expect(options.at(1).attributes().value).toEqual('2')
  })

  it('test emit events', () => {
    const wrapper = selectFactory()

    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)

    select.setValue(2)
    let event = wrapper.emitted('select-item')
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([2])

    select.setValue(1)
    event = wrapper.emitted('select-item')
    expect(event.length).toBe(2)
    expect(event[1]).toEqual([1])
  })

  it('test withEmpty property', () => {
    const wrapper = selectFactory({ withEmpty: true })
    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options.at(0).attributes().label).toBe('')
    expect(options.at(0).attributes().value).toBe('0')
  })
})
