<template>
  <section id="article-page" class="default-bg default-page">
    <Navbar></Navbar>

    <div class="container">
      <div class="title-area">
        <h1>FORZEN DANCE</h1>
        <h2>By Terry</h2>
      </div>

      <div class="main">
        <div class="content">
          <img class="feature" src="/news/news_width.jpg" alt="">

          <div class="text">
  我會正走包票呢。文大一地個就爸在以是十可定，式好直氣再爭。邊時理開土了名的汽的是！甚月師：自少代任我要臺現行英的保不鄉花出。史生賽送看和！都在意但然走式發腦雙已下說長最，不常住。

  一王期，來致財念大素空：讓族基水。沒活致益當幾。館的存裝細飯爸小的下子四下聲你音種其口消了有加氣深生在音！

  下代意師企點熱致考！高示系小軍是會位因字巴。何言處類資有：明然時吃形車電子甚照康內年的反，大球公雄包打我的注來教坡坡天口個調什到任此親王產來為好人的……起作手題量片而他生音人為吃，幾正？

  作河加落但事縣：品共訴向廠可決們長少去我書據她要倒速傳你人！

  現式於便。最出回長。部學中黨權前等要觀臺的這團再的木這門不一高輪，在都票品地毛直！作作一中熱有對義東性過為現上生福，對一益國外充，的藥上有；手讀情上能學知拉生現眼滿影國十？夫中親人單想要業住強腦大……健巴父、玩叫內了月中大陸要自之要了興度一很家代至神……她每可提朋：治和不火出認力禮原收答或的小通試問英政明落力、天減下臺來錢，而比叫館讀、整這我則的向女；事近再。也都筆。部可接。裝南過舉許、好庭線先動主苦望印取地；利想會我可起地下母功高我麼很書原，經原展美於方大選人面國年，看活較中座，法電在區日們或但水司朋了好用，真青我團？演二標處一熱多圖在的：去手新其不。

  傷和拉策定然、電回放的地又要地傳天，感燈難表。

  園全滿。好對對這來本現率停人明的麼子，裡根習治、他電蘭，己我了本產！有出間否來樣！
          </div>
        </div>

        <Sidebar></Sidebar>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Article/Sidebar.vue'
export default {
  name: "articlepage",
  components: {
    Navbar,
    Sidebar
  },
}
</script>

<style lang="scss">
#article-page {
  .title-area {
    margin: 40px 0;
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  .main {
    .content, #article-sidebar {
      display: inline-block;
      vertical-align: top;
    }
    .content {
      width: 70%;
      padding-right: 20px;
      img.feature {
        width: 100%;
      }
      .text {
        width: 100%;
        padding: 40px 0;
        white-space: pre-wrap;
        line-height: 1.5rem;
      }
    }
    #article-sidebar {
      width: 30%;
    }
  }
}
@media screen and (max-width: 768px){
  .title-area {
    text-align: center;
  }
  #article-page {
    .main {
      .content {
        width: auto;
        padding-right: 0;
      }
      #article-sidebar {
        width: auto;
        border: none;
        padding-left: 0;
      }
    }
  }
}
</style>