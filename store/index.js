import Vue from 'vue'
import Vuex from 'vuex'
import article from './article'
import home from './home'
import timeline from './timeline'

Vue.use(Vuex)

const store = ()=>{
   return new Vuex.Store({
    modules: {
        article,
        home,
        timeline
    }
    })
}

export default store