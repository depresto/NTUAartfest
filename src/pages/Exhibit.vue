<template>
  <section id="exhibit" class="default-bg default-page">
    <Navbar></Navbar>
    
    <div class="container">

      <div class="main">
        <div class="content" v-if="artist">
          <div class="title-area">
            <h1>{{artist.fields.ArtistName}}</h1>
          </div>

          <div class="feature">
            <img :src="artist.fields.FeatureImage" alt="">
          </div>

          <div class="text">{{artist.fields.Description}}</div>

          <img :src="artist.fields.Image1" alt="">
          <h3 class="work-title">{{artist.fields.Title1}}</h3>
          <div class="text">{{artist.fields.Text1}}</div>

          <img :src="artist.fields.Image2" v-if="artist.fields.Image2" alt="">
          <h3 class="work-title" v-if="artist.fields.Title2">{{artist.fields.Title2}}</h3>
          <div class="text" v-if="artist.fields.Text2">{{artist.fields.Text2}}</div>

          <img :src="artist.fields.Image3" v-if="artist.fields.Image3" alt="">
          <h3 class="work-title" v-if="artist.fields.Title3">{{artist.fields.Title3}}</h3>
          <div class="text" v-if="artist.fields.Text3">{{artist.fields.Text3}}</div>
        </div>

        <Sidebar :artists="artists"></Sidebar>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Exhibit/Sidebar.vue'
export default {
  name: "exhibit",
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    artist: function () {
      return this.$store.getters['artists/getArtistByName'](this.$route.params.name);
    },
    ...mapState({
      artists: state => state.artists.artists
    })
  }
}
</script>

<style lang="scss" scoped>
#exhibit {
  padding-bottom: 100px;
  .title-area {
    margin: 40px 0;
    display: block;
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  .main {
    .content, #exhibit-sidebar {
      display: inline-block;
      vertical-align: top;
    }
    .content {
      position: relative;
      z-index: 10;
      width: 70%;
      padding-right: 20px;
      .feature {
        max-width: 100%;
        text-align: center;
        background-color: #000;
        img {
          max-width: 100%;
          max-height: 300px;
        }
      }
      .work-title {
        margin-top: 40px;
        margin-bottom: -20px;
        font-size: 1.3rem;
      }
      .text {
        width: 100%;
        padding: 30px 0;
        white-space: pre-wrap;
        line-height: 1.5rem;
      }
      > img {
        width: 100%;
      }
    }
    #exhibit-sidebar {
      margin-top: 120px;
      width: 30%;
    }
  }
}
@media screen and (max-width: 768px){
  .title-area {
    text-align: center;
  }
  #exhibit {
    .main {
      display: flex;
      flex-direction: column;
      .content {
        order: 2;
        width: auto;
        padding-right: 0;
      }
      #exhibit-sidebar {
        order: 1;
        width: auto;
        border: none;
        padding-left: 0;
        margin-top: 0;
      }
    }
  }
}
</style>