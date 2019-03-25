/* ============
 * Mutations for the cars module
 * ============
 *
 * The mutations that are available on the cars module.
 */
import {
  SET_STATE,
  SET_CARS,
  SET_SPEED_ITEMS,
  SET_RUN_ITEMS,
  SET_FILTER_VALUE,
  RESET_FILTERS,
  ADD_CAR_BOOKING,
  CANCEL_CAR_BOOKING,
  CHANGE_CURRENT_DAY,
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
  [RESET_FILTERS] (state) {
    state.speedValue = null
    state.runValue = null
  },
  [ADD_CAR_BOOKING] (state, payload) {
    state.bookedCars.push(payload)
  },
  [CANCEL_CAR_BOOKING] (state, { id, date }) {
    const item = state.bookedCars.find(item => item.id === id && item.date === date)
    state.bookedCars = state.bookedCars.filter(car => car !== item)
  },
  [CHANGE_CURRENT_DAY] (state, day) {
    state.currentDate = day
  }
}
