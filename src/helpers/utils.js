/**
 * Description of utils.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 24.01.19 9:16
 */

import { head, last, sortBy } from 'lodash'

function findAppropriateCliche(items) {
  let cliche = null
  if (items.length > 0) {
    const sorted = sortBy(items, ['designVer', 'setnumber']);
    const lastRecord = last(sorted)
    const filtred = sorted.filter(item => item.designVer === lastRecord.designVer)
    cliche = head(filtred)
  }
  return cliche
}

export default {
  findAppropriateCliche
}
