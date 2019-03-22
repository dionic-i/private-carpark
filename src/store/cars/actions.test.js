/**
 * Description of actions.tets.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.01.19 12:57
 */

import actions from './actions'
import * as types from './mutation-types'
import data from '@/data'

describe('CARS ACTIONS', () => {
  it('LoadInfo test', async () => {
    const commit = jest.fn()
    const { cars, speedItems, runItems } = data

    await actions.LoadInfo({ commit })

    expect(commit).toHaveBeenCalledWith(types.SET_STATE, true)
    expect(commit).toHaveBeenCalledWith(types.SET_CARS, cars)
    expect(commit).toHaveBeenCalledWith(types.SET_SPEED_ITEMS, speedItems)
    expect(commit).toHaveBeenCalledWith(types.SET_RUN_ITEMS, runItems)
    expect(commit).toHaveBeenCalledWith(types.SET_STATE, false)
  })
})
