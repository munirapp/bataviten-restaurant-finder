const mutations = {
  set(state, payload) {
    state[payload[0]] = payload[1]
  },

  reset(state, payload) {
    state[payload[0]] = null
  },
}

export default mutations
