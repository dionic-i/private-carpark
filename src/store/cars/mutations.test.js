/**
 * Description of mutations.test.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.01.19 11:47
 */
import * as types from './mutation-types'
import mutations from "./mutations.js"

describe('CARS MUTATIONS', () => {
  it('set state', () => {
    const state = { isLoading: false }
    mutations[types.SET_STATE](state, true)
    expect(state).toEqual({ isLoading: true })

    mutations[types.SET_STATE](state, false)
    expect(state).toEqual({ isLoading: false })
  })

  it('set cars', () => {
    const state = { cars: [] }
    const cars = [{ id: 1, name: 'BMV' }]
    mutations[types.SET_CARS](state, cars)
    expect(state).toEqual({ cars })
  })

  it('set speed items', () => {
    const state = { maxSpeedItems: [] }
    const maxSpeedItems = [{ id: 1, name: '100' }]
    mutations[types.SET_SPEED_ITEMS](state, maxSpeedItems)
    expect(state).toEqual({ maxSpeedItems })
  })

  it('set run items', () => {
    const state = { runItems: [] }
    const runItems = [{ id: 1, name: '100' }]
    mutations[types.SET_RUN_ITEMS](state, runItems)
    expect(state).toEqual({ runItems })
  })

  it('set filter value', () => {
    const state = { speedValue: null, runValue: null }
    mutations[types.SET_FILTER_VALUE](state, { name: 'speedValue', value: 3 })
    expect(state).toEqual({ speedValue: 3, runValue: null })
  })

  it('reset filters', () => {
    const state = { speedValue: 2, runValue: 4 }
    mutations[types.RESET_FILTERS](state)
    expect(state).toEqual({ speedValue: null, runValue: null })
  })

  it('add car booking', () => {
    const state = { bookedCars: [] }
    const car = {id: 1, date: '2019-01-01'}
    mutations[types.ADD_CAR_BOOKING](state, car)
    expect(state).toEqual({ bookedCars: [car] })
  })

  it('cancel car booking', () => {
    const car1 = {id: 1, date: '2019-01-01'}
    const car2 = {id: 1, date: '2019-01-01'}
    const state = { bookedCars: [car1, car2] }
    mutations[types.CANCEL_CAR_BOOKING](state, car1)
    expect(state).toEqual({ bookedCars: [car2] })
  })

  it('change current day', () => {
    const state = { currentDate: '' }
    mutations[types.CHANGE_CURRENT_DAY](state, '2019-01-01')
    expect(state).toEqual({ currentDate: '2019-01-01' })
  })
})
