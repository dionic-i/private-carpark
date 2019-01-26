import { shallowMount, mount } from '@vue/test-utils'
import CarCardList from './CarCardList.vue'
import CarCard from '../CarCard/CarCard.vue'

describe('test CarCardList', () => {
  it('test empty cars', () => {
    const cars = []
    const wrapper = shallowMount(CarCardList, {
      propsData: {
        cars,
      },
    })

    expect(wrapper.find('.columns').exists()).toBe(true)
    expect(wrapper.find('.is-full').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.html().includes('У вас пока нет машин.')).toBe(true)
  })

  it('test custom empty message', () => {
    const wrapper = shallowMount(CarCardList, {
      propsData: {
        cars: [],
        emptyText: 'Нет записей...',
      },
    })

    expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.html().includes('Нет записей...')).toBe(true)
  })

  it('test cars count', () => {
    const cars = [
      { id: 1, title: '11', description: '11', maxSpeed: 50, currentRun: 10  },
      { id: 1, title: '11', description: '11', maxSpeed: 50, currentRun: 10  },
    ]

    const wrapper = mount(CarCardList, {
      propsData: {
        cars,
        emptyText: 'Нет записей...',
      },
      stubs: {
        CarCard: true,
      },
    })

    expect(wrapper.findAll(CarCard).length).toBe(2)
  })

})
