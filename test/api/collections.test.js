import dataMockCollections from '../__mock__/dataCollections'
import apiFactory from "../../plugins/api-factory"

describe('Test api get collections', () => {
  it('it should return response same with mock json', async () => {
    // Initate variable params
    const city_id = 74
    const lat = -6.189281
    const lon = 106.836104
    // Run api request
    const response = await apiFactory.getAllCollections(city_id, lat, lon)
    // Expect response request has 200 code
    expect(response.status).toBe(200)
    // Expect response request has same data object keys with data mock
    expect(Object.keys(response.data)).toEqual(Object.keys(dataMockCollections))
    expect(Object.keys(response.data.collections[0].collection)).toEqual(
      Object.keys(response.data.collections[0].collection)
    )
  })
})
