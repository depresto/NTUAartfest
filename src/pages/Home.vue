<template>
  <section class="home">
    <transition name="fade">
      <Loading v-if="loading"></Loading>
    </transition>

    <Banner></Banner>
    <Works></Works>
    <Video></Video>
    <CommingSoon></CommingSoon>
    <Intro></Intro>
    <News></News>
    <Map></Map>
    <Schedule></Schedule>
  </section>
</template>

<script>
import Banner from '@/components/Home/Banner.vue'
import Works from '@/components/Home/Works.vue'
import Video from '@/components/Home/Video.vue'
import CommingSoon from '@/components/Home/CommingSoon.vue'
import Intro from '@/components/Home/Intro.vue'
import News from '@/components/Home/News.vue'
import Map from '@/components/Home/Map.vue'
import Schedule from '@/components/Home/Schedule.vue'
import Loading from '@/components/Loading.vue'
// import Contactus from '@/components/Home/Contactus.vue'

export default {
  name: "home",
  components: {
    Banner,
    Works,
    Video,
    CommingSoon,
    Intro,
    News,
    Map,
    Schedule,
    Loading,
    // Contactus
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    var vm = this;
    this.$nextTick(function () {
      setTimeout(() => {
        vm.loading = false;
      }, 800);
    })
  },
}
</script>

<style scoped lang="scss">
  .home {
    background-image: url(~@/assets/images/background.png);
    background-size: cover;
    background-attachment: fixed;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 768px){
    .home {
      background-size: 100% auto;
    }
  }
</style>