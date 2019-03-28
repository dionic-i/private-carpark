/**
 * Description of actions.test.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.01.19 12:57
 */
import data from '@/data'

import actions from './actions'
import * as types from './mutation-types'

jest.mock('@/helpers/messages', () => ({
  showInfo: jest.fn()
}))

describe('CARS ACTIONS', () => {
  it('test LoadInfo', async () => {
    const commit = jest.fn()
    const { cars, speedItems, runItems } = data

    await actions.LoadInfo({ commit })

    expect(commit).toHaveBeenCalledWith(types.SET_STATE, true)
    expect(commit).toHaveBeenCalledWith(types.SET_CARS, cars)
    expect(commit).toHaveBeenCalledWith(types.SET_SPEED_ITEMS, speedItems)
    expect(commit).toHaveBeenCalledWith(types.SET_RUN_ITEMS, runItems)
    expect(commit).toHaveBeenCalledWith(types.SET_STATE, false)
  })

  it('test ChangeFilter', async () => {
    const commit = jest.fn()
    const filter = { name: 'speedValue', value: 1 }
    actions.ChangeFilter({ commit }, filter)
    expect(commit).toHaveBeenCalledWith(types.SET_FILTER_VALUE, filter )
  })

  it('test ResetFilter', async () => {
    const commit = jest.fn()
    actions.ResetFilter({ commit })
    expect(commit).toHaveBeenCalledWith(types.RESET_FILTERS )
  })

  it('test AddCarBooking', async () => {
    const commit = jest.fn()
    const payload = {id: 1, date: '2019-01-01'}
    actions.AddCarBooking({ commit }, payload)
    expect(commit).toHaveBeenCalledWith(types.ADD_CAR_BOOKING, payload )
  })

  it('test CancelCarBooking', async () => {
    const commit = jest.fn()
    const payload = {id: 1, date: '2019-01-01'}
    actions.CancelCarBooking({ commit }, payload)
    expect(commit).toHaveBeenCalledWith(types.CANCEL_CAR_BOOKING, payload)
  })

  it('test ChangeCurrentDay', async () => {
    const commit = jest.fn()
    const day = '2019-01-01'
    actions.ChangeCurrentDay({ commit }, day)
    expect(commit).toHaveBeenCalledWith(types.CHANGE_CURRENT_DAY, day)
  })

})
