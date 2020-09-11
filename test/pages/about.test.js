// Import library
import { shallowMount } from '@vue/test-utils'
// Import Main Component
import About from '../../pages/about.vue'
import HeroWrapper from '../../components/heroWrapper.vue'

// Initiate variable wrapper component
let wrapper = null

beforeAll(() => {
  // Mount wrapper component
  wrapper = shallowMount(About)
})

describe('Test vue components in pages about.vue', () => {
  test('main component mounted properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('child component heroWrapper.vue is exists', () => {
    expect(wrapper.findComponent(HeroWrapper).exists()).toBe(true)
  })
})
