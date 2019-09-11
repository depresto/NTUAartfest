<template>
  <div id="event-list">
    <div class="container">
      <div class="box" v-for="(item, index) in news_list" :key="index">
        <div class="img-bg" :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>

        <div class="information">
          <div class="place">
            {{item.title}}
          </div>
          <div class="description">
            <p>時間：{{item.time}}</p>
            <p>地點：{{item.location}}</p>
            <p>簡介：{{item.content}}</p>
            <p>連結：<a :href="item.url">{{item.url}}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#event-list {
  padding-top: 50px;
  padding-bottom: 50px;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 90%;
    max-width: 980px;
    margin: 0 auto;
  }
  .box {
    border: none;
    margin: 30px 0;
    width: 30%;

    position: relative;
    &:hover .information {
      visibility: visible;
      opacity: 1;
    }
    img {
      width: 100%;
    }
    .img-bg {
      z-index: 100;
      width: 100%;
      height: 200px;
    }
    .information {
      width: 250px;
      color: #000;
      line-height: 1.5rem;
      text-align: left;
      background-color: #DDDDDD;
      padding: 10px 20px;
      margin-top: 20px;
      z-index: 1000;

      position: absolute;
      right: -40%;
      top: -100px;

      visibility: hidden;
      opacity: 0;
      transition: opacity 1s;
      .place {
        font-size: 1.5em;
        margin: 10px 0;
        text-align: center;
      }
      .description {
        font-size: 0.9em;
        line-height: 1.6em;
        p {
          margin-bottom: 5px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  #event-list {
    padding-top: 20px;
    .container {
      flex-wrap: wrap;
      flex-direction: column;
    }
    .box {
      width: 100%;
      .information {
        visibility: visible;
        opacity: 1;

        position: relative;
        right: 0;
        top: 0;
        margin-top: 0;

        width: 100%;
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
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      },{
        img: "/news/news.jpg",
        title: "失常",
        time: "2019/09/15",
        location: "台灣藝術大學",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫",
        url: "www.afred.com.tw"
      }]
    }
  },
}
</script>