import { shallowMount } from '@vue/test-utils'
import HeroWrapper from '../../components/heroWrapper.vue'

describe('Test mount Hero Wrapper Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(HeroWrapper)
    expect(wrapper.vm).toBeTruthy()
  })
})
