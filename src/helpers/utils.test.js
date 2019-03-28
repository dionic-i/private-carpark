/**
 * Description of utils.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.01.19 9:16
 */
import moment from 'moment'
import {
  getFirstAllowedDay,
  today,
  getDate,
} from './utils'

describe('Test utils functions', () => {

  it('test getFirstAllowedDay', () => {
    const booked = ['2019-03-25', '2019-03-26', '2019-03-28']
    const first = getFirstAllowedDay(booked, '2019-03-25')
    expect(first.isSame('2019-03-27')).toBe(true)
    expect(first.isSame('2019-03-25')).toBe(false)
  })

  it('test today', () => {
    let todayValue = today()
    let todayCheck = moment().format('YYYY-MM-DD')
    expect(todayValue).toBe(todayCheck)

    todayValue = today('DD-MM-YYYY')
    todayCheck = moment().format('DD-MM-YYYY')
    expect(todayValue).toBe(todayCheck)
  })

  it('test getDate', () => {
    let date = getDate('2019-05-01')
    let dateCheck = new Date(2019, 4, 1)
    expect(date).toEqual(dateCheck)
  })

})
