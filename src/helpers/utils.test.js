/**
 * Description of utils.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.01.19 9:16
 */
import moment from 'moment'
import { getFirstAllowedDay } from './utils'

describe('Test utils functions', () => {

  it('test getFirstAllowedDay', () => {
    const booked = ['2019-03-25', '2019-03-26', '2019-03-28']
    const first = getFirstAllowedDay(booked, '2019-03-25')
    expect(first.isSame('2019-03-27')).toBe(true)
    expect(first.isSame('2019-03-25')).toBe(false)
  })

})
