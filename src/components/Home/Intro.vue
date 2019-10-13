<template>
  <div id="exhibition-intro">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>活動理念</h1>
    </div>

    <div class="container">
      <img src="/h5-1.png" alt="">

      <div v-html="home_data['About']"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      home_data: 'artists/getHome'
    })
  }
}
</script>

<style lang="scss">
#exhibition-intro {
  .page-title {
    padding-bottom: 50px;
  }
  .container {
    width: 90%;
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    align-items:center;

    img {
      width: 50%;
      display: inline-block;
      z-index: 10;
    }
    > div {
      width: 50%;
      display: inline-block;
      padding: 20px 50px;
      margin-left: 20px;
      z-index: 10;
      // background-color: #232584;

      p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 5px;
        // color: #fff;
        // text-align: center;;
      }
    }
  }
}
@media screen and (max-width: 768px){
  #exhibition-intro {
    .container {
      display: block;
      img {
        width: 100%;
        padding: 20px;
      }
      > div {
        width: 100%;
        margin-left: 0;
        padding: 20px;
      }
    }
  }
}
</style>