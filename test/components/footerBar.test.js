import { shallowMount } from '@vue/test-utils'
import FooterBar from '../../components/footerBar.vue'

describe('Test mount Footer Bar Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(FooterBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
