import Vue from 'vue'
import Vuex from 'vuex'
import artists from './modules/artists'
import team from './modules/team'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    artists,
    team
  },
  strict: debug
})