<template>
  <div id="news">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>最新消息</h1>
    </div>

    <div class="container slide">
      <swiper :options="swiperOption" v-view>
        <swiper-slide v-for="(item, index) in news_list" :key="index">
          <router-link :to="{ name: 'articlepage', params: { id: item.id } }">
            <img :src="item.fields.Image" alt="">

            <div class="text">
              <h1>{{item.fields.Name}}</h1>
              <div class="description">
                <div v-html="item.fields.Content"></div>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
  </div>
</template>

<style lang="scss">
#news {
  .page-title {
    padding-bottom: 50px;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 90%;
    max-width: 980px;
    margin: 0 auto;
    position: relative;
  }
  .box, .swiper-slide {
    z-index: 100;

    border: none;
    min-width: 200px;
    img {
      width: 100%;
      transition: transform 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .text {
      padding: 15px 20px;

      h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 15px;
      }
      .description {
        min-width: 0;
        width: 100%;

        margin-bottom: 5px;
        font-size: .9rem;
        line-height: 1.5rem;
        p {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .swiper-button-prev {
    left: -40px;
  }
  .swiper-button-next {
    right: -40px;
  }
}
@media screen and (max-width: 768px){
  #news {
    .container {
      flex-wrap: wrap;
    }
    .swiper-button-prev {
      left: 0px;
    }
    .swiper-button-next {
      right: 0px;
    }
  }
}
</style>

<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: { 
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
          },
        }
      },
    }
  },
  computed: {
    ...mapState({
      news_list: state => state.artists.news_list
    })
  }
}
</script>