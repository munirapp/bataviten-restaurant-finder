/* eslint-disable */

// Import Library
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dotenv from 'dotenv'
import VueRouter from 'vue-router'
// Import vue store files
import store from '../../store'
// Import Plugins API
import apiFactory from '../../plugins/api-factory'
// Import Main Component
import IdDetail from '../../pages/detail/_id.vue'
// Import Child Component
import HeroWrapper from '../../components/heroWrapper.vue'
import ReviewSection from '../../components/reviewSection.vue'
// Import Data Mocks
import dataMockDetailRestaurant from '../__mock__/dataDetailRestaurant'

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
  //Use vue router in local vue
  localVue.use(VueRouter)
  // Initiate router fo local vue
  const router = new VueRouter({
    routes: [{ path: '/detail/:id', component: IdDetail }],
  })
  // Mount wrapper component
  wrapper = shallowMount(IdDetail, { router, store, localVue })
})

describe('Test vue components in pages detail/_id.vue', () => {
  test('main component mounted properly', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('child component heroWrapper.vue is exists', () => {
    expect(wrapper.findComponent(HeroWrapper).exists()).toBe(true)
  })
  test('child component reviewSection.vue is exists', () => {
    expect(wrapper.findComponent(ReviewSection).exists()).toBe(true)
  })
})

describe('Test store process in pages detail/_id.vue', () => {
  test('data computed detailRestaurant have same object keys with data mock detail restaurant', async () => {
    // Run router push with example parameter restaurant id
    wrapper.vm.$router.push('/detail/7405446')
    // Get parameter id
    const { id } = wrapper.vm.$route.params
    // Run store actions
    await wrapper.vm.$store.dispatch('runGetDetailRestaurant', {
      key: 'dataDetailRestaurant',
      id,
    })

    expect(Object.keys(wrapper.vm.detailRestaurant)).toEqual(
      Object.keys(dataMockDetailRestaurant)
    )
  })
})
