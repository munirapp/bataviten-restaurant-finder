import axios from 'axios'
import dotenv from 'dotenv'
import dataMockRestaurant from '../__mock__/dataSearchRestaurant'

// Initate variable for api url, api key, axios create instance
let zomatoUrl = null
let zomatoKey = null
let request = null

beforeAll(() => {
  // Get data from .env
  dotenv.config()
  // Passing data api url and api key from .env
  zomatoUrl = process.env.ZOMATO_API_URL
  zomatoKey = process.env.ZOMATO_API_KEY
  // Create instance axios
  request = axios.create({
    baseURL: zomatoUrl,
    headers: { 'user-key': zomatoKey },
  })
})

describe('Test api get collections', () => {
  it('it should return response same with mock json', async () => {
    // Initate variable params
    const entity_id = 74
    const entity_type = 'city'
    const q = 'kemang'
    const order = 'asc'
    // Initate variable config axios request
    const config = ['/search', { params: { entity_id, entity_type, q, order } }]
    // Run axios request
    const response = await request.get(...config)
    // Expect response request has 200 code
    expect(response.status).toBe(200)
    // Expect response request has same data object keys with data mock
    expect(Object.keys(response.data)).toEqual(Object.keys(dataMockRestaurant))
    expect(Object.keys(response.data.restaurants[0].restaurant)).toEqual(
      Object.keys(response.data.restaurants[0].restaurant)
    )
  })
})
