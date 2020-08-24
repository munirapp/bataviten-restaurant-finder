import { shallowMount } from '@vue/test-utils'
import ContactSection from '../../components/contactSection.vue'

describe('Test mount Contact Section Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(ContactSection)
    expect(wrapper.vm).toBeTruthy()
  })
})
