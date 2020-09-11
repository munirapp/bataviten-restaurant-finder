import dotenv from 'dotenv'
import apiFactory from '../../plugins/api-factory'
import dataMockDetailRestaurant from '../__mock__/dataDetailRestaurant'

beforeAll(() => {
  dotenv.config()
  apiFactory.setCustomUrlApi(
    process.env.ZOMATO_API_URL,
    process.env.ZOMATO_API_KEY
  )
})

describe('Test api get collections', () => {
  it('it should return response same with mock json', async () => {
    // Initate variable params
    const resId = 7405446
    // Run api request
    const response = await apiFactory.getDetailRestaurant(resId)
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
