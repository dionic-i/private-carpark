/* ============
 * Mutations for the cars module
 * ============
 *
 * The mutations that are available on the cars module.
 */
import remove from 'lodash/remove'

import {
  SET_STATE,
  SET_CARS,
  SET_SPEED_ITEMS,
  SET_RUN_ITEMS,
  SET_FILTER_VALUE,
  ADD_CAR_BOOKING,
  CANCEL_CAR_BOOKING,
} from './mutation-types'

export default {
  [SET_STATE] (state, value) {
    state.isLoading = value
  },
  [SET_CARS] (state, cars) {
    state.cars = cars
  },
  [SET_SPEED_ITEMS] (state, items) {
    state.maxSpeedItems = items
  },
  [SET_RUN_ITEMS] (state, items) {
    state.runItems = items
  },
  [SET_FILTER_VALUE] (state, { name, value }) {
    state[name] = value
  },
  [ADD_CAR_BOOKING] (state, payload) {
    state.bookedCars.push(payload)
  },
  [CANCEL_CAR_BOOKING] (state, { id, date }) {
    const item = state.bookedCars.find(item => item.id === id && item.date === date)
    state.bookedCars = state.bookedCars.filter(car => car !== item)
  },
}
