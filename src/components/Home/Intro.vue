<template>
  <div id="exhibition-intro">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>活動理念</h1>
    </div>

    <div class="container">
      <img src="/h5-1.png" alt="">

      <div>
        <p>如今時代，睜開眼就能看見影像瀑布正無止盡地傾瀉，透過社群網路、串流平台，每個人都是訊息驛站，並身在奇觀現實的洪流之中，這竟是限時動態的世界？</p>
        <p>儘管如此，體驗依然體現在身體和感知上，遭逢的物體仍被視覺符號化，以及其隱喻所滲透。我們參與新的信息向度，動態地與現象學的身體交織在一起，通過「在世存有」，創造深刻和突出的美學遭遇。</p>
        <p>「限時動態-超領域國際展」從媒體文化著手，綜觀藝術下科技語彙、植物生態學與流行文化，邀請造形藝術領域藝術家和表演團體，探查新時代藝術機制與感知模式。</p>
      </div>
    </div>
  </div>
</template>

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