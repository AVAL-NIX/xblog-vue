//文章页面主要功能
import {
  get,
  check
} from '~/plugins/api'

const state = {
  top: true,
  title: '',
  artileObj: {},
  article: null
}
// getters
const getters = {
}
// actions
const actions = {
    async getArticle({state}, id){
        await get('/home/article/' + id).then(res => {
            check(res.data, true).then(res => {
                state.article = res.data
            })
        })
    }
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