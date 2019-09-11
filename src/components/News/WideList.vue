<template>
  <div id="news-widelist">
    <div class="container">
      <div class="box" v-for="(item, index) in news_list" :key="index">
        <router-link :to="{ name: 'articlepage', params: { id: item.id } }">
          <div class="list-img" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>

          <div class="text">
            <h1>{{item.title}}</h1>
            <div class="description">
              <p>{{item.content}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#news-widelist {
  padding-top: 30px;
  padding-bottom: 50px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 90%;
    max-width: 980px;
    margin: 0 auto;
  }
  .box {
    z-index: 100;

    border: none;
    margin: 0 30px 50px 30px;
    min-width: 200px;

    position: relative;
    .list-img {
      width: 100%;
      height: 250px;
      background-size: cover;
      background-position: center center;
    }
    .text {
      padding: 15px 20px;
      position: absolute;
      bottom: 0;
      width: 100%;

      h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: #fff;
      }
      .description {
        width: 300px;
        margin: 0 auto;

        margin-bottom: 5px;
        font-size: .9rem;
        line-height: 1.5rem;
        p {
          color: #fff;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  #news-widelist {
    .container {
      flex-wrap: wrap;
      .description {
        width: 100%!important;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      news_list: [{
        id: "1",
        img: "/news/news_width.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news_width.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news_width.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news_width.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news_width.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      }]
    }
  },
}
</script>