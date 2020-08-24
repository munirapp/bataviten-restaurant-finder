import { shallowMount } from '@vue/test-utils'
import Index from '../../pages/index.vue'

describe('Test mount Index Page', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})
