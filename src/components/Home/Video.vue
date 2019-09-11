<template>
  <div id="exhibition-trail">
    <div class="video-container">
      <video src="/main.mp4" autoplay loop muted></video>
    </div>

    <a href="https://youtu.be/wc1SAHXyHrk">▶</a>
  </div>
</template>

<style lang="scss">
  #exhibition-trail {
    width: 100%;
    height: 100vh;

    position: relative;
    overflow: hidden;
    .video-container {
      position: absolute;
      top: 0;
      clip: rect(0, auto, auto, 0);
      width: 100%;
      height: 100%;
      background: black;
      video {
        position: fixed;
        top: 10px;
        height: calc(100% - 20px);
        width: 100%;
      }
    }

    a {
      position: absolute;
      right: 40px;
      bottom: 50px;
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 5px;
      color: $white;
      opacity: .8;

      color: #aaa;
    }
  }
  
  @media screen and (max-width: 768px) {
    #exhibition-trail {
      height: auto!important;
      .video-container { 
        position: relative!important;
        height: auto!important;
        video {
          position: relative!important;
        }
      }
      a {
        right: 5px;
        bottom: 10px;
        font-size: 1.3rem;
      }
    }
  }
</style>