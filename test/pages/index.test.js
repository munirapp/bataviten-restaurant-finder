import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dataMockCollections from '../__mock__/dataCollections'
import dataMockSearchRestaurant from '../__mock__/dataSearchRestaurant'
import store from '../../store'
import dotenv from 'dotenv'
import apiFactory from '../../plugins/api-factory'
import Index from '../../pages/index.vue'
import HeroWrapper from '../../components/heroWrapper.vue'
import ImageSquare from '../../components/imageSquare.vue'

let localVue = null
let wrapper = null

beforeAll(() => {
  dotenv.config()
  apiFactory.setCustomUrlApi(
    process.env.ZOMATO_API_URL,
    process.env.ZOMATO_API_KEY
  )
  localVue = new createLocalVue()
  localVue.use(Vuex)
  wrapper = shallowMount(Index, { store, localVue })
})

describe('Test mount Index Page', () => {
  it('It should mounted properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Test mount child component', () => {
  it('It should mounted Hero Wrapper Component properly', () => {
    expect(wrapper.findComponent(HeroWrapper).exists()).toBe(true)
  })
  it('It should mounted Image Square Component properly', () => {
    expect(wrapper.findComponent(ImageSquare).exists()).toBe(true)
  })
})

describe('Test Store process', () => {
  it('It should same object keys between computed data with data mock', async () => {
    await wrapper.vm.$store.dispatch('runGetAllCollections')
    expect(Object.keys(wrapper.vm.listCollections)).toEqual(
      Object.keys(dataMockCollections)
    )
  })

  it('It should same object keys between computed data with data mock', async () => {
    const payload = {
      key: 'dataRestoCenterJakarta',
      data: {
        entityId: 74,
        entityType: 'city',
        q: 'kemayoran',
        order: 'asc',
        count: 4,
      },
    }
    await wrapper.vm.$store.dispatch('runSearchRestaurant', payload)
    expect(Object.keys(wrapper.vm.listRestoCenterJakarta)).toEqual(
      Object.keys(dataMockSearchRestaurant)
    )
  })
})
