/* ============
 * Getters for the cars module
 * ============
 *
 * The getters that are available on the cars module.
 */
import moment from 'moment'
import uniqBy from 'lodash/uniqBy'
import sortBy from 'lodash/sortBy'

import { make } from 'vuex-pathify'

import { DATE_FORMAT } from '@/app.constants'
import { getDate, getFirstAllowedDay, today } from '@/helpers/utils'

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
    const { cars, bookedCars, speedValue, runValue, currentDate } = state
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
    const showedDay = moment(currentDate).format(DATE_FORMAT)
    items = items.map(car => ({
      ...car,
      isBooked: carIsBooked(car, showedDay, bookedCars)
    }))

    return items
  },
  bookedDays(state) {
    return uniqBy(state.bookedCars, 'date').map(({ date }) => date)
  },
  bookedCars(state) {
    const sortedBooking = sortBy(state.bookedCars, [function (book) {
      return moment(book.date)
    }])

    return sortedBooking.map(({ id, date }) => {
      const car = state.cars.find(obj => obj.id === id)
      return {
        id,
        carName: car.title,
        bookedDate: date
      }
    })
  },
  firstAllowedDay(state) {
    let startDate = getDate(state.currentDate)
    if (state.bookedCars.length > 0) {
      const bookedDays = state.bookedCars.map(item => item.date)
      startDate = getDate(getFirstAllowedDay(bookedDays, state.currentDate))
    }
    return startDate
  },
  todayCar(state) {
    const now = state.currentDate
    const bookedCar = state.bookedCars.find(item => item.date === now)
    return bookedCar ? state.cars.find(item => item.id === bookedCar.id) : {}
  }
}
