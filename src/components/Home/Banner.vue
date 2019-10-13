<template>
  <div class="banner">
    <div id="banner-video">
      <img src="/banner/banner.gif" alt="">
    </div>

    <div id="banner-video-mobile"></div>

    <Navbar :in_home="true"></Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Banner',
  components: {
    Navbar
  },
  data() {
    return {
      textShow: true
    }
  },
  methods: {
    videocanplay: function () {
      this.textShow = false;
    }
  }
}
</script>

<style lang="scss">
  .banner {
    width: 100vw;
    height: auto;
    position: relative;

    margin-bottom: -5px;

    #banner-video, #banner-video img {
      width: 100%;
    }
    #banner-video-mobile {
      display: none;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }

    .container {
      position: absolute;
      top: 0;

      width: 100%;
      height: 100%;

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    h1, h2, h3, li, a, path {
      color: $white;
    }

    .title-box {
      text-align: center;
      h1, h2 {
        line-height: 4.2rem;
      }

      h1 {
        font-size: 4rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
  .vid-info { position: absolute; top: 0; right: 0; width: 33%; background: rgba(0,0,0,0.3); color: #fff; padding: 1rem; font-family: Avenir, Helvetica, sans-serif; }
  .vid-info h1 { font-size: 2rem; font-weight: 700; margin-top: 0; line-height: 1.2; }
  .vid-info a { display: block; color: #fff; text-decoration: none; background: rgba(0,0,0,0.5); transition: .6s background; border-bottom: none; margin: 1rem auto; text-align: center; }
</style>

<style lang="scss">
  @media only screen and (max-width: 768px) {
    .banner {
      height: 100vh;
    }
    #banner-video {
      display: none!important;
    }
    #banner-video-mobile {
      background-image: url(/banner/banner-mobile.gif);
      display: block!important;
    }
  }
</style>