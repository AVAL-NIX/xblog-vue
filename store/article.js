//文章页面主要功能
import {
  get,
  check
} from '~/plugins/api'

const state = {
  top: true,
  articleTop: false,
  title: '',
  artileObj: {},
}
// getters
const getters = {
  getToc: state => state.toc,
  getArticleToc: state => state.articleTop
}
// actions
const actions = {

}
// mutations
const mutations = {
  changeTop(state) {
    state.top = !state.top
    state.articleTop = !state.articleTop
  },
  setTitle(state, title) {
    state.title = title
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}