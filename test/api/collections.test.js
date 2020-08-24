import axios from 'axios'
import dotenv from 'dotenv'
import dataMockCollections from '../__mock__/dataCollections'

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
    const city_id = 74
    const lat = -6.189281
    const lon = 106.836104
    // Initate variable config axios request
    const config = ['/collections', { params: { city_id, lat, lon } }]
    // Run axios request
    const response = await request.get(...config)
    // Expect response request has 200 code
    expect(response.status).toBe(200)
    // Expect response request has same data object keys with data mock
    expect(Object.keys(response.data)).toEqual(Object.keys(dataMockCollections))
    expect(Object.keys(response.data.collections[0].collection)).toEqual(
      Object.keys(response.data.collections[0].collection)
    )
  })
})
