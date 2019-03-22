/**
 * Description of cars.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 28.01.19 11:28
 */

export function loadData(timeout = 200) {
  return new Promise((resolve) => {
    const data = require('../data')
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}
