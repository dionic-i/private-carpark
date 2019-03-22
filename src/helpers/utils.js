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
    const year = dateObj.get('year')
    const month = dateObj.get('month')
    const day = dateObj.get('date')
    newDate = new Date(year, month, day)
  }
  return newDate
}

export const today = (format = DATE_FORMAT) => moment().format(format)

export default {
  getDate,
  today,
}
