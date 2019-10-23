// home页面的主要对象数据
import {get , check} from '@/utils/api'

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
    labelsList:[]
  }
  // getters
  const getters = {
    getDrawer: state => state.drawer,
  }
  // actions
  const actions = {
      getTitles({state}){
        get('/home/article/titles').then(function(res){
            check(res.data, true).then(function(res) {
                if(res.data){
                    res.data.map(item=>{
                        state.titles.push({
                             value: item
                         })
                    })
                }
            })
        })
      },
      getArticle({state}){
        get("/home/article", {
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
      getLabels({state}){
        get("/home/article/labels").then(res => {
            check(res.data, true).then(res => {
                state.labelsList = res.data
            }).catch(res => {})
        })
      }

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