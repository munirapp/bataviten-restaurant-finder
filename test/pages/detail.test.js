import { shallowMount } from '@vue/test-utils'
import IdDetail from '../../pages/detail/_id.vue'

describe('Test mount Detail ID Pages', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(IdDetail)
    expect(wrapper.vm).toBeTruthy()
  })
})
