import { shallowMount } from '@vue/test-utils'
import SearchResult from '../../components/searchResult.vue'

describe('Test mount Search Result Component', () => {
  it('It should mounted properly', () => {
    const wrapper = shallowMount(SearchResult)
    expect(wrapper.vm).toBeTruthy()
  })
})
