var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyaCLaknylRllFMt'}).base('appuYFCD38iqhaEjO');

// initial state
const state = {
  team: []
}

// getters
const getters = {

}

// actions
const actions = {
  getTeamData ({ commit }) {
    base('Team').select({
      view: "Grid view"
    }).eachPage(function page(records) {
      commit('setTeam', {team: records});
    }, function done(err) {
      // eslint-disable-next-line no-console
      if (err) { console.error(err); return; }
    });
  }
}

// mutations
const mutations = {
  setTeam(state, { team }) {
    state.team = team;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}