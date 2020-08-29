/* eslint-disable */

// Import Library
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dotenv from 'dotenv'
// Import vue store files
import store from '../../store'
// Import Plugins API
import apiFactory from '../../plugins/api-factory'
// Import Main Component
import Index from '../../pages/index.vue'
// Import Child Component
import HeroWrapper from '../../components/heroWrapper.vue'
import ImageSquare from '../../components/imageSquare.vue'
// Import Data Mocks
import dataMockCollections from '../__mock__/dataCollections'
import dataMockSearchRestaurant from '../__mock__/dataSearchRestaurant'

// Initiate variable local vue, wrapper component
let localVue = null
let wrapper = null

beforeAll(() => {
  // Get .env variable
  dotenv.config()
  // Override default api url, api key
  apiFactory.setCustomUrlApi(
    process.env.ZOMATO_API_URL,
    process.env.ZOMATO_API_KEY
  )
  // Create local vue class
  localVue = new createLocalVue()
  // Use vue store in local vue
  localVue.use(Vuex)
  // Mount store, local vue into wrapper component
  wrapper = shallowMount(Index, { store, localVue })
})

describe('Test vue components in pages index.vue', () => {
  test('main component mounted properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('child component herroWrapper.vue is exists', () => {
    expect(wrapper.findComponent(HeroWrapper).exists()).toBe(true)
  })
  test('child component imageSquare.vue is exists', () => {
    expect(wrapper.findComponent(ImageSquare).exists()).toBe(true)
  })
})

describe('Test store process in pages index.vue', () => {
  test('data computed listcollections have same object keys with data mock collecctions', async () => {
    // Runnig actions store
    await wrapper.vm.$store.dispatch('runGetAllCollections')

    expect(Object.keys(wrapper.vm.listCollections)).toEqual(
      Object.keys(dataMockCollections)
    )
  })

  test('data computed listRestoCenterJakarta have same object keys with data mock search restaurant', async () => {
    // Inititate data payload parameter for actions store
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
    // Running actions store
    await wrapper.vm.$store.dispatch('runSearchRestaurant', payload)

    expect(Object.keys(wrapper.vm.listRestoCenterJakarta)).toEqual(
      Object.keys(dataMockSearchRestaurant)
    )
  })
})
