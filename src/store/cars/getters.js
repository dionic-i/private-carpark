/* ============
 * Getters for the cars module
 * ============
 *
 * The getters that are available on the cars module.
 */
import moment from 'moment'
import uniqBy from 'lodash/uniqBy'

import { make } from 'vuex-pathify'

import { DATE_FORMAT } from '@/app.constants'

import state from './state'

export function makeList(items) {
  return items.map(item => {
    const { id, min, max } = item
    const name = max ? `${min}-${max}` : `>${min}`
    return {
      id,
      name,
    }
  })
}

export function carIsBooked(car, day, booked = []) {
  return booked.findIndex(item => item.id === car.id && item.date === day) !== -1
}

export default {
  ...make.getters(state),

  speedRange(state) {
    return makeList(state.maxSpeedItems)
  },
  runRange(state) {
    return makeList(state.runItems)
  },
  carItems(state) {
    const { cars, bookedCars, speedValue, runValue } = state
    let items = cars

    // Apply filters
    if (speedValue || runValue) {
      if (speedValue) {
        const { max = 1000, min } = state.maxSpeedItems.find(item => item.id === speedValue)
        items = state.cars.filter(item => item.maxSpeed >= min && item.maxSpeed <= max)
      }
      if (runValue) {
        const { max = 1000, min } = state.runItems.find(item => item.id === runValue)
        items = items.filter(item => item.currentRun >= min && item.currentRun <= max)
      }
    }

    // Apply booking
    const today = moment().format(DATE_FORMAT)
    items = items.map(car => ({
      ...car,
      isBooked: carIsBooked(car, today, bookedCars)
    }))

    return items
  },
  bookedDays(state) {
    return uniqBy(state.bookedCars, 'date').map(({ date }) => date)
  },
  firstAllowedDay() {

  }
}
