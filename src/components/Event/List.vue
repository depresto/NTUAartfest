<template>
  <div id="event-list">
    <div class="container">
      <div class="box" v-for="(item, index) in currentEvents" :key="index">
        <div class="img-bg" :style="{ backgroundImage: 'url(' + item.bg + ')' }"></div>

        <div class="information">
          <div class="place">
            {{item.title}}
          </div>
          <div class="description">
            <p>時間：{{item.start}} {{item.time}}</p>
            <p>地點：{{item.place}}</p>
            <p class="intro">簡介：{{item.intro}}</p>
            <p>連結：<a :href="item.link">{{item.link}}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#event-list {
  padding-top: 10px;
  padding-bottom: 50px;
  min-height: 100vh;
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
      background-size: cover;
      background-position: center center;
    }
    .information {
      width: 250px;
      color: #000;
      line-height: 1.5rem;
      text-align: left;
      background-color: #DDDDDD;
      padding: 10px 20px;
      margin-top: 20px;
      z-index: 100000;
      display: block;

      position: absolute;
      right: -40%;
      top: -100px;

      visibility: hidden;
      opacity: 0;
      transition: opacity 1s;
      .place {
        font-size: 1.5em;
        line-height: 1.8rem;
        margin: 10px 0;
        text-align: center;
      }
      .description {
        font-size: 0.9em;
        line-height: 1.5em;
        p {
          margin-bottom: 2px;
        }
        .intro {
          white-space: pre-line;
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      category: {
        programs: '表演節目',
        workshops: '工作坊',
        lectures: '講座'
      }
    }
  },
  computed: {
    ...mapGetters({
      events: 'artists/getCallendarEvent'
    }),
    currentEvents() {
      let vm = this;
      return vm.events.filter(event => event.type == vm.category[vm.$route.params.category])
    }
  },
}
</script>