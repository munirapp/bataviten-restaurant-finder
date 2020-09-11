import axios from 'axios'

class ApiFactory {
  constructor() {
    // Initate variable axios create instance
    this.request = axios.create({
      baseURL: process.env.zomatoUrl,
      headers: { 'user-key': process.env.zomatoKey },
    })
  }

  /**
   * Override url and api key axios request
   * @param {string} url URL Custom API
   * @param {string} apiKey API Key Custom
   */
  setCustomUrlApi(url, apiKey) {
    this.request = axios.create({
      baseURL: url,
      headers: { 'user-key': apiKey },
    })
  }

  /**
   * Get All Collections
   * @param {string} cityId ID City
   * @param {number} lat Latitude
   * @param {number} lon Longitude
   */
  async getAllCollections(cityId, lat, lon, count) {
    const config = [
      '/collections',
      { params: { city_id: cityId, lat, lon, count } },
    ]
    const response = await this.request.get(...config)
    return response
  }

  /**
   * Get Detail Restaurant By ID
   * @param {number} resId Restaurant ID
   */
  async getDetailRestaurant(resId) {
    const config = ['/restaurant', { params: { res_id: resId } }]
    const response = await this.request.get(...config)
    return response
  }

  /**
   * Get Data Review By Restaurant ID
   * @param {number} resId Restaurant ID
   */
  async getReviewRestaurant(resId) {
    const config = ['/reviews', { params: { res_id: resId } }]
    const response = await this.request.get(...config)
    return response
  }

  /**
   * Get Result from Restaurant Search
   * @param {*} entityId Entity ID
   * @param {*} entityType Entity Type
   * @param {*} q Query Search
   * @param {*} order Order Result
   */
  async searchRestaurant({ entityId, entityType, q, order, count }) {
    const config = [
      '/search',
      {
        params: {
          entity_id: entityId,
          entity_type: entityType,
          q,
          order,
          count,
        },
      },
    ]
    const response = await this.request.get(...config)
    return response
  }
}

export default new ApiFactory()
