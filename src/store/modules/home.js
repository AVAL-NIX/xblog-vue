// initial state
const state = {
    drawer: false,

  }
  // getters
  const getters = {
    getDrawer: state => state.drawer,
  }
  // actions
  const actions = {

  }
  // mutations
  const mutations = {
      changeDrawer (state) {
          state.drawer = !state.drawer
      }
  }
  export default {
    state,
    getters,
    actions,
    mutations
  }