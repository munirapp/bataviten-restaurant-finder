import { shallowMount } from '@vue/test-utils'
import ReviewSection from '../../components/reviewSection.vue'

describe('Test mount Review Section Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(ReviewSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
