import { shallowMount } from '@vue/test-utils'
import ImageSquare from '../../components/imageSquare.vue'

describe('Test mount Image Square Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(ImageSquare)
    expect(wrapper.vm).toBeTruthy()
  })
})
