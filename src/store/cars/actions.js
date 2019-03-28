/* ============
 * Actions for the cars module
 * ============
 *
 * The actions that are available on the cars module.
 */
import { loadData } from '@/api'
import { today } from '@/helpers/utils'
import { showInfo } from '@/helpers/messages'

import * as types from './mutation-types'

export const LoadInfo = async ({ commit }) => {
  commit(types.SET_STATE, true)
  const { cars, speedItems, runItems } = await loadData(1000)
  commit(types.SET_CARS, cars)
  commit(types.SET_SPEED_ITEMS, speedItems)
  commit(types.SET_RUN_ITEMS, runItems)
  commit(types.SET_STATE, false)
}

export const ChangeFilter = ({ commit }, { name, value }) => {
  commit(types.SET_FILTER_VALUE, { name, value })
}

export const ResetFilter = ({ commit }) => {
  commit(types.RESET_FILTERS)
}

export const AddCarBooking = ({ commit }, payload) => {
  commit(types.ADD_CAR_BOOKING, payload)
  showInfo(`Машина успешно забронирована на ${payload.date}`)
}

export const CancelCarBooking = ({ commit, getters }, { id, date }) => {
  const cancelDate = date || getters.currentDate
  commit(types.CANCEL_CAR_BOOKING, { id, date: cancelDate })
  showInfo(`Бронирование машины успешно отменено`)
}

export const ChangeCurrentDay = ({ commit }, day) => {
  commit(types.CHANGE_CURRENT_DAY, day)
}

export default {
  LoadInfo,
  ChangeFilter,
  ResetFilter,
  AddCarBooking,
  CancelCarBooking,
  ChangeCurrentDay,
}
