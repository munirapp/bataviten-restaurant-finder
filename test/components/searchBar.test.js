import { shallowMount } from '@vue/test-utils'
import SearchBar from '../../components/searchBar.vue'

describe('Test mount Search Bar Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(SearchBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
