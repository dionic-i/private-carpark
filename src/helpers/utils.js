/**
 * Description of utils.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.01.19 9:16
 */
import moment from 'moment'

import { DATE_FORMAT } from '@/app.constants'

export const getDate = (date, format = DATE_FORMAT) => {
  let newDate = new Date()
  const dateObj = moment(date, format)
  if (date && dateObj.isValid()) {
    const [year, month, day, hours, minutes, seconds] = dateObj.toArray()
    newDate = new Date(year, month, day, hours, minutes, seconds)
  }
  return newDate
}

export const today = (format = DATE_FORMAT) => moment().format(format)

export const getFirstAllowedDay = (bookedDays = [], firstDate = '') => {
  let startDate = moment(firstDate)
  if (!startDate.isValid()) {
    startDate = moment()
  }

  const checkBusy = (date) => bookedDays.indexOf(date.format(DATE_FORMAT)) !== -1
  let isBusy = checkBusy(startDate)
  while (isBusy) {
    startDate.add(1, 'days')
    isBusy = checkBusy(startDate)
  }
  return startDate
}

export default {
  getDate,
  today,
  getFirstAllowedDay
}
