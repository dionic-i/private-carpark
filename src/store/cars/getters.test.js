/**
 * Description of getters.test.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.01.19 15:11
 */
import getters from './getters.js'
import { makeList } from './getters.js'

const data = [
  { id: 1, min: 0, max: 10 },
  { id: 2, min: 11, max: 20 },
  { id: 3, min: 21 },
]

const result = [
  { id: 1, name: '0-10' },
  { id: 2, name: '11-20' },
  { id: 3, name: '>21' },
]

const cars = [
  { id: 1, title: 'BMW X1', maxSpeed: 5, currentRun: 5 },
  { id: 2, title: 'BMW X2', maxSpeed: 12, currentRun: 13 },
  { id: 3, title: 'BMW X3', maxSpeed: 45, currentRun: 46 },
]

describe('CARS GETTERS', () => {
  it('test makeList', () => {
    const actual = makeList(data)
    expect(actual).toEqual(result)
  })

  it('test speedRange', () => {
    const state = { maxSpeedItems: data }
    const actual = getters.speedRange(state)
    expect(actual).toEqual(result)
  })

  it('test runRange', () => {
    const state = { runItems: data }
    const actual = getters.runRange(state)
    expect(actual).toEqual(result)
  })

  it('test carItems', () => {
    const state = { cars, runItems: data, maxSpeedItems: data }
    let actual = getters.carItems(state)
    expect(actual).toEqual(cars)

    state.speedValue = 1
    actual = getters.carItems(state)
    expect(actual).toEqual([{ id: 1, title: 'BMW X1', maxSpeed: 5, currentRun: 5 }])

    state.speedValue = 0
    state.runValue = 2
    actual = getters.carItems(state)
    expect(actual).toEqual([{ id: 2, title: 'BMW X2', maxSpeed: 12, currentRun: 13 }])

    state.speedValue = 3
    state.runValue = 3
    actual = getters.carItems(state)
    expect(actual).toEqual([{ id: 3, title: 'BMW X3', maxSpeed: 45, currentRun: 46 }])
  })
})
