import { shallowMount } from '@vue/test-utils'
import Index from '../../pages/index.vue'
import HeroWrapper from "../../components/heroWrapper.vue"
import ImageSquare from "../../components/imageSquare.vue"

let wrapper = null

beforeAll(()=>{
  wrapper = shallowMount(Index)
})

describe('Test mount Index Page', () => {
  it('It should mounted properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Test mount child component', ()=>{
  it('It should mounted Hero Wrapper Component properly', ()=>{
    expect(wrapper.findComponent(HeroWrapper).exists()).toBe(true)
  })
  it('It should mounted Image Square Component properly', ()=>{
    expect(wrapper.findComponent(ImageSquare).exists()).toBe(true)
  })
})
