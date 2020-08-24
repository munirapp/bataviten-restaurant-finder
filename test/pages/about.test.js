import { shallowMount } from '@vue/test-utils'
import About from '../../pages/about.vue'

describe('Test mount About Pages', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.vm).toBeTruthy()
  })
})
