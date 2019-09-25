<template>
  <div id="comming-soon">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>敬請期待</h1>
    </div>

    <swiper :options="swiperOption" v-view>
      <swiper-slide v-for="(item, index) in events" :key="index">
        <router-link :to="item.fields.Link">
          <div class="image" :style="{ backgroundImage: 'url(' + item.fields.Image + ')' }"></div>
          <div class="text">
            <h1>{{item.fields.Name}}</h1>
            <h2>{{item.fields.Date}} {{item.fields.Location}}</h2>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<style lang="scss">
#comming-soon {
  .page-title {
    padding-bottom: 50px;
  }
  .swiper-slide {
    position: relative;
    height: 100%;
    img {
      width: 100%;
    }
    .image {
      width: 100%;
      height: 0;
      padding-bottom: 100%;

      background-size: cover;
      background-position: center center;
    }
    .text {
      position: absolute;
      right: 0;
      bottom: 0;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
      opacity: 0;
      transition: 1s;

      &:hover {
        opacity: 1;
      }
    }
    h1 {
      text-align: right;
      font-size: 17px;
      opacity: 0.7;
      margin-right: 10px;
      padding-left: 50px;
      margin-bottom: 5px;
      color: $white;
    }
    h2 {
      text-align: right;
      font-size: 14px;
      opacity: 0.7;
      margin-right: 10px;
      padding-left: 40px;
      margin-bottom: 10px;
      color: $white;
      font-weight: normal;
    }
  }
}
@media screen and (max-width: 768px){
  #comming-soon {
    .view-in--full {
      .swiper-slide {
        .text {
          transition: 2s;
          opacity: 1;
        }
      }
    }
  }
}
</style>

<script>
import { mapState } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { 
    swiper,
    swiperSlide
  },
  computed: mapState({
    events: state => state.artists.events
  }),
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
          },
        }
      }
    }
  }
}
</script>