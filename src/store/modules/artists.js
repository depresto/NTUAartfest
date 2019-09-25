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
  }],
  events: [],
  news_list: [{
    id: "1",
    fields: {
      Image: "/news/news.jpg",
      Name: "失常",
      Content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
    }
  }, {
    id: "1",
    fields: {
      Image: "/news/news.jpg",
      Name: "失常",
      Content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
    }
  }, {
    id: "1",
    fields: {
      Image: "/news/news.jpg",
      Name: "失常",
      Content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
    }
  }],
}

// getters
const getters = {
  getArtistByName: (state) => (name) => {
    if (typeof name == 'undefined') {
      return state.artists[0];
    } else {
      return state.artists.find(artist => artist.fields.ArtistName == name);
    }
  },
  getCallendarEvent: state => {
    return state.events.map(event => {
      return {
        id: event.id,
        title: event.fields.Name,
        type: event.fields.Type,
        start: event.fields.Date,
        cssClass: ['persian', 'bg'],
        time: event.fields.Time,
        place: event.fields.Location,
        intro: event.fields.Content,
        bg: event.fields.Image,
        link: event.fields.Link,
      }
    })
  },
  getNewsByType: state => type => {
    return state.news_list.filter(news => {
      if (typeof type == 'undefined') {
        return news.fields.Type == '最新消息'
      } else {
        return news.fields.Type == type;
      }
    })
  },
  getNewsByID: state => id => {
    return state.news_list.find(news => news.id == id);
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
  },
  getEventData ({ commit }) {
    base('Event').select({
      view: "Grid view"
    }).eachPage(function page(records) {
      commit('setEvents', {events: records});
    }, function done(err) {
      // eslint-disable-next-line no-console
      if (err) { console.error(err); return; }
    });
  },
  getNewsData({ commit }) {
    base('News').select({
      view: "Grid view"
    }).eachPage(function page(records) {
      commit('setNews', {news: records});
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
  },
  setEvents(state, { events }) {
    state.events = events;
  },
  setNews(state, { news }) {
    state.news_list = news;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}