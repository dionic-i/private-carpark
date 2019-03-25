/* ============
 * State of the cars module
 * ============
 *
 * The initial state of the cars module.
 */

import { today } from '@/helpers/utils'

export default {
  cars: [],

  bookedCars: [],

  maxSpeedItems: [],

  runItems: [],

  speedValue: null,

  runValue: null,

  isLoading: false,

  currentDate: today()
}
