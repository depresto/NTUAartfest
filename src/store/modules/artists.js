var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyaCLaknylRllFMt'}).base('appuYFCD38iqhaEjO');

// initial state
const state = {
  artists: [{
    fields: {
      ArtistName: "The Slow Torque of Bonsai",
      FeatureImage: 'https://i.imgur.com/M1NsQZa.png?1',
      Image1: "https://d3d9mb8xdsbq52.cloudfront.net/190827/20190827212713517.jpg",
      Title1: "Gary HILL"
    }
  },{
    fields: {
      ArtistName: "成長卷鬚",
      Image1: "https://i.imgur.com/vawQ3OA.jpg",
      Title1: "河口洋一郎"
    }
  },{
    fields: {
      ArtistName: "Work",
      Image1: "https://i.imgur.com/Z93EIFA.jpg",
      Title1: "Mel O’CALLAGHAN"
    }
  },{
    fields: {
      ArtistName: "聲音牆 Wall of Sound",
      Image1: "https://i.imgur.com/0VXaZde.png",
      Title1: "莊哲偉"
    }
  }]
}

// getters
const getters = {
  getArtistByName: (state) => (name) => {
    if (typeof name == 'undefined') {
      return state.artists[0];
    } else {
      return state.artists.find(artist => artist.fields.ArtistName == name);
    }
  }
}

// actions
const actions = {
  getArtistData ({ commit }) {
    base('Artists').select({
      view: "Grid view"
    }).eachPage(function page(records) {
      commit('setArtists', {artists: records});
    }, function done(err) {
      // eslint-disable-next-line no-console
      if (err) { console.error(err); return; }
    });
  }
}

// mutations
const mutations = {
  setArtists(state, { artists }) {
    state.artists = artists;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}