var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyaCLaknylRllFMt'}).base('appuYFCD38iqhaEjO');

// initial state
const state = {
  team: [{
    fields: {
      Image: "https://i.imgur.com/7tLikIu.png",
      Name: "陳志誠",
      Position: "策展人",
      Title: "國立臺灣藝術大學校長"
    }
  }, {
    fields: {
      Image: "https://i.imgur.com/rRwXSm1.png",
      Name: "羅景中",
      Position: "計畫主持人",
      Title: "有章藝術博物館館長"
    }
  }, {
    fields: {
      Image: "https://i.imgur.com/xFFSWDF.png",
      Name: "陳文樵",
      Position: "策劃顧問"
    }
  }],
  sponsors: [{
    fields: {
      Image: "https://i.imgur.com/O4WomTi.png?1",
      Name: "教育部",
      Type: "指導單位"
    }
  }, {
    fields: {
      Image: "https://i.imgur.com/O4s2sE5.png",
      Name: "文化部",
      Type: "指導單位"
    }
  }, {
    fields: {
      Image: "https://i.imgur.com/SXgfIji.png",
      Name: "國立臺灣藝術大學",
      Type: "主辦單位"
    }
  }]
}

// getters
const getters = {
  getSponsors: state => {
    return state.sponsors.reduce((arr ,sponsor) => {
      if (arr[sponsor.fields.Type] == undefined) {
        arr[sponsor.fields.Type] = [];
        if (arr['types'] == undefined) arr['types'] = [];
        arr['types'].push(sponsor.fields.Type);
      }
      arr[sponsor.fields.Type].push(sponsor.fields);
      return arr;
    })
  }
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
  },
  getSponsorData ({ commit }) {
    base('Sponsor').select({
      view: "Grid view"
    }).eachPage(function page(records) {
      commit('setSponsors', {sponsors: records});
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
  },
  setSponsors(state, { sponsors }) {
    state.sponsors = sponsors;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}