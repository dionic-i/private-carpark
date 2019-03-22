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
    const state = {isLoading: false}
    mutations[types.SET_STATE](state, true)
    expect(state).toEqual({isLoading: true})

    mutations[types.SET_STATE](state, false)
    expect(state).toEqual({isLoading: false})
  })

  it('set cars', () => {
    const state = {cars: []}
    const cars = [{id: 1, name: 'BMV'}]
    mutations[types.SET_CARS](state, cars)
    expect(state).toEqual({cars})
  })

  it('set speed items', () => {
    const state = {maxSpeedItems: []}
    const maxSpeedItems = [{id: 1, name: '100'}]
    mutations[types.SET_SPEED_ITEMS](state, maxSpeedItems)
    expect(state).toEqual({maxSpeedItems})
  })

  it('set run items', () => {
    const state = {runItems: []}
    const runItems = [{id: 1, name: '100'}]
    mutations[types.SET_RUN_ITEMS](state, runItems)
    expect(state).toEqual({runItems})
  })

})
