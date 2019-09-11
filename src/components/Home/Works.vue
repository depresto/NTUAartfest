<template>
  <div id="works" v-view>
    <!-- swiper -->
    <vueper-slides 
      class="no-shadow"
      autoplay
      fade 
      :speed="3000" 
      :transitionSpeed="1000"
      :infinite="true"
      :arrows="false"
      :bullets="false"
      :dragging-distance="100"
      :visible-slides="2"
      slide-multiple
      :slide-ratio="1/3"
      :breakpoints="{ 
        800: { 
          visibleSlides: 1,
          slideRatio: 1
        },
      }">
      <vueper-slide v-for="(item, index) in artists" :key="index" 
        :title="item.fields.ArtistName"
        :content="item.fields.Title1"
        :image="item.fields.Image1"
        :link="`/exhibit/${item.fields.ArtistName}`"
        ></vueper-slide>
    </vueper-slides>
  </div>
</template>

<style lang="scss">
  #works {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    .vueperslide__content-wrapper {
      opacity: 0;
      transition: 1s;

      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0,0,0,.5);
    }
    .vueperslide:hover .vueperslide__content-wrapper {
      opacity: 1;
      transition: opacity 2s;
    }
    .vueperslide__title {
      font-weight: bold;
      font-size: 30px;
    }
    .vueperslide__content {
      margin-top: 5px;
      font-size: 24px;
    }
    .vueperslide__title, .vueperslide__content {
      opacity: 0.7;
      color: $white;
    }
    // .vueperslides__parallax-wrapper {
    //   margin-left: -20px;
    //   margin-right: -20px;
    // }
    // .vueperslide {
    //   margin: 20px;
    //   width: calc( 50% - 40px )!important;
    // }
  }
  @media only screen and (max-width: 768px) {
    #works {
      &.view-in--full {
        .vueperslide__content-wrapper { 
          opacity: 1;
        }
      }
      .vueperslide__title {
        font-size: 25px;
      }
      .vueperslide__content {
        margin-top: 10px;
        font-size: 20px;
      }
    }
  }
</style>

<script>
import { mapState } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  computed: mapState({
    artists: state => state.artists.artists
  })
}
</script>