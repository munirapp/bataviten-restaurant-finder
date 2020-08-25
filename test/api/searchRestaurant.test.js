import dataMockRestaurant from '../__mock__/dataSearchRestaurant'
import apiFactory from "../../plugins/api-factory"

describe('Test api get collections', () => {
  it('it should return response same with mock json', async () => {
    // Initate variable params
    const entity_id = 74
    const entity_type = 'city'
    const q = 'kemang'
    const order = 'asc'
    // Run api request
    const response = await apiFactory.searchRestaurant(entity_id, entity_type, q, order)
    // Expect response request has 200 code
    expect(response.status).toBe(200)
    // Expect response request has same data object keys with data mock
    expect(Object.keys(response.data)).toEqual(Object.keys(dataMockRestaurant))
    expect(Object.keys(response.data.restaurants[0].restaurant)).toEqual(
      Object.keys(response.data.restaurants[0].restaurant)
    )
  })
})
