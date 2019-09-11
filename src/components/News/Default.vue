<template>
  <div id="news-default">
    <div class="container">
      <div class="box" v-for="(item, index) in news_list" :key="index">
        <router-link :to="{ name: 'articlepage', params: { id: item.id } }">
          <img :src="item.img" alt="">

          <div class="text">
            <h1>{{item.title}}</h1>
            <div class="description">
              <p>{{item.content}}</p>
            </div>
            <div class="readmore">
              <router-link to="">Read More...</router-link>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#news-default {
  padding-top: 30px;
  padding-bottom: 50px;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 90%;
    max-width: 980px;
    margin: 0 auto;
  }
  .box {
    z-index: 100;

    border: none;
    margin: 0 30px;
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
      .readmore {
        margin-top: 20px;
        margin-right: -15px;
        text-align: right;
      }
    }
  }
}
@media screen and (max-width: 768px){
  #news-default {
    .container {
      flex-wrap: wrap;
      flex-direction: column;
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
        img: "/news/news.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      },{
        id: "1",
        img: "/news/news.jpg",
        title: "失常",
        content: "時果似無，有可也氣排說處父一口算的接正層港難國一是廣春選國打阿適活我上是的決慢一習除公趣銷水前，面在是聞過外打大沒林半害畫"
      }]  
    }
  },
}
</script>