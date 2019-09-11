<template>
  <div id="start" class="default-bg">

    <div class="content">
      <!-- <Logo></Logo> -->
      <div class="home-btn">
        <router-link to="home"><font-awesome-icon icon="bars"></font-awesome-icon></router-link>
      </div>

      <div id="main" class="main" :style="background_style" 
        @mousedown="onClickArea"
        @mouseup="onMouseUp"
        @touchstart="onClickArea"
        @touchend="onMouseUp"></div>

      <!-- <router-link to="home">前往首頁</router-link> -->
      <div class="counter">{{click_count}}</div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  #start {
    width: 100%;
    height: 100vh;
    background: #000 url(/click.png);
    background-repeat: no-repeat;
    background-size: 80px 80px;
    background-position: center center;
    .logo {
      position: absolute;
      top: 0;
      left: 20px;
    }
    .home-btn {
      position: absolute;
      top: 40px;
      left: 60px;
      a {
        font-size: 2.5rem;
        color: #fff;
      }
    }
    .counter {
      position: absolute;
      right: 40px;
      bottom: 50px;
      font-size: 1.1rem;
      font-weight: bold;
      letter-spacing: 5px;
      opacity: .8;
    }
    .counter {
      color: #fff;
    }
    .main {
      width: 70vh;
      height: 70vh;

      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -35vh;
      margin-left: -35vh;

      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media screen and (max-width: 768px){
    #start {
      .home-btn {
        left: 40px;
      }
      .main {
        width: 90vw;
        height: 90vw;

        margin-top: -45vw;
        margin-left: -45vw;
      }
    }
  }
</style>

<script>
// import Logo from '@/components/Logo.vue'
export default {
  name: "start",
  // components: {
  //   Logo
  // },
  data() {
    return {
      background_style: {},
      click_queue: 0,
      click_count: 0
    }
  },
  created() {
    // preload loading gif on page create
    var image = document.createElement('img');
    image.src = '/loading.gif';
  },
  methods: {
    onClickArea: function (e) {
      var ele = document.getElementById('main');

      var nth_X = Math.round(e.offsetX / ele.offsetWidth * 9)
      var nth_Y = Math.round(e.offsetY / ele.offsetHeight * 9)

      var image_index = nth_Y * 10 + nth_X + 1;
      var vm = this;
      var background_url = '/landing/landing' + image_index + '.jpg';

      // In loading state first
      vm.background_style = { backgroundImage: 'url(/loading.gif)'}

      var image = document.createElement('img');
      image.src = background_url;
      image.onload = function () {
        vm.background_style = { backgroundImage: 'url(' + background_url + ')'}
        vm.click_queue ++;

        // Reset background after 3 secs if there's no another click
        setTimeout(() => {
          if (vm.click_queue <= 1)
            vm.background_style = {}

          vm.click_queue --;
        }, 3000);
      };

      vm.click_count ++;
    },
    onMouseUp: function () {
      // this.background_style = {}
    }
  },
}
</script>
