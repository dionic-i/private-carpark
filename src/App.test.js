/**
 * Description of App.tes.js.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 23.01.19 9:30
 */

import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('test App', () => {
  it('works', () => {
    const wrapper = shallowMount(App)
  })
})
