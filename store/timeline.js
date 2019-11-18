// home页面的主要对象数据
import {get , check} from '~/plugins/api'

const state = {
    data: [],
    page: 1,
    size: 13,
    total: 1,
  }
  // getters
  const getters = {
  }
  // actions
  const actions = {
      async getTimeLine({state}){
        await get('/home/article/time',{
            page: state.page,
            size: state.size
        }).then(res => {
            check(res.data, true).then(res => {
                state.data = res.data.records
                state.total = res.data.total
            })
        })
      }

  }
  // mutations
  const mutations = {

  }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }