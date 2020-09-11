import apiFactory from '../plugins/api-factory'

const actions = {
  async runGetAllCollections({ commit }) {
    const cityId = 74
    const lat = -6.189281
    const lon = 106.836104
    const count = 4
    const { data } = await apiFactory.getAllCollections(cityId, lat, lon, count)
    commit('set', ['dataCollections', data])
  },

  async runSearchRestaurant({ commit }, payload) {
    const { data } = await apiFactory.searchRestaurant(payload.data)
    commit('set', [payload.key, data])
  },

  async runGetDetailRestaurant({ commit }, payload) {
    console.log(payload)
    const { data } = await apiFactory.getDetailRestaurant(payload.id)
    commit('set', [payload.key, data])
  },
}

export default actions
