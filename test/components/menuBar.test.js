import { shallowMount } from '@vue/test-utils'
import MenuBar from '../../components/menuBar.vue'

describe('Test mount Menu Bar Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(MenuBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
