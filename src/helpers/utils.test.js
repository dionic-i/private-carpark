/**
 * Description of utils.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.01.19 9:16
 */

import hf from './utils'

const data = [
  {setnumber: 4, designVer: 20},
  {setnumber: 2, designVer: 20},
  {setnumber: 3, designVer: 10},
  {setnumber: 3, designVer: 20},
  {setnumber: 10, designVer: 0},
  {setnumber: 15, designVer: 0},
  {setnumber: 4, designVer: 0}
]

describe('Test utils functions', () => {
  it('test sortCliches function', () => {
    let cliche = hf.findAppropriateCliche(data)
    expect(cliche).toEqual({setnumber: 2, designVer: 20})

    data.push({setnumber: 1, designVer: 20})
    cliche = hf.findAppropriateCliche(data)
    expect(cliche).toEqual({setnumber: 1, designVer: 20})
  })
})
