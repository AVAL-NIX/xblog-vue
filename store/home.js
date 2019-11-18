// home页面的主要对象数据
import {get , check} from '~/plugins/api'

const state = {
    //抽屉是否展示
    drawer: false,
    //搜索条件
    labels: '',
    //搜索条件
    channels:'',
    titles:[],
    queryTitle:'',
    page:1,
    size:10,
    articleList: [],
    total:0,
    //标签云
    labelsList:[],
    //是否是移动端
    isMobile:false
  }
  // getters
  const getters = {
    getDrawer: state => state.drawer,
  }
  // actions
  const actions = {
    async getTitles({state}){
        await get('/home/article/titles').then(function(res){
            check(res.data, true).then(function(res) {
                if(res.data){
                    state.titles = []
                    res.data.map(item=>{
                        state.titles.push({
                             value: item
                         })
                    })
                }
            })
        })
      },
      async getArticle({state}){
        await get("/home/article", {
            page: state.page,
            size: state.size,
            title: state.queryTitle,
            labels: state.labels,
        }).then(res => {
            check(res.data, true).then(res => {
                state.articleList = res.data.records
                state.total = res.data.total
            })
        })
      },
      async getLabels({state}){
        await get("/home/article/labels").then(res => {
            check(res.data, true).then(res => {
                state.labelsList = res.data
            })
        })
      },

  }
  // mutations
  const mutations = {
      changeDrawer (state) {
          state.drawer = !state.drawer
      },
      setPage(state, val){
          state.page= val
      },
      setSize(state, val){
          state.size = val
      },
      changeQueryTitle(state, val){
        state.queryTitle = val
      },
      changeLabels(state,val){
          state.labels = val
      }
  }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }