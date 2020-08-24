import axios from 'axios'
import dotenv from 'dotenv'
import dataMockDetailRestaurant from '../__mock__/dataDetailRestaurant'

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
    const res_id = 7405446
    // Initate variable config axios request
    const config = ['/restaurant', { params: { res_id } }]
    // Run axios request
    const response = await request.get(...config)
    // Expect response request has 200 code
    expect(response.status).toBe(200)
    // Expect response request has same data object keys with data mock
    expect(Object.keys(response.data)).toEqual(
      Object.keys(dataMockDetailRestaurant)
    )
    // Expect response has same restaurant name with data mock
    expect(response.data.name).toEqual(dataMockDetailRestaurant.name)
  })
})
