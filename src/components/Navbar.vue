<template>
  <div class="navbar" :class="{ in_home: in_home, active_menu: current_show_menu }">
    <div class="left-items">
      <div class="show-navbar">
        <div class="hamburger hamburger--squeeze" :class="{ 'is-active': current_show_menu }" @click="toggleNav">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'home' }">
        <Logo is_white="true"></Logo>
      </router-link>
    </div>

    <div class="center-list in-banner">
      <ul>
        <li>
          <router-link :to="{ name: 'home' }"><h3>HOME</h3></router-link>
          <ul>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#works'" v-smooth-scroll>作品曝光</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#exhibition-trail'" v-smooth-scroll>展演預告</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#comming-soon'" v-smooth-scroll>敬請期待</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#exhibition-intro'" v-smooth-scroll>展演簡介</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#news'" v-smooth-scroll>最新消息</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#maps'" v-smooth-scroll>周邊地圖</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#schedule'" v-smooth-scroll>時程表</router-link></li>
            <li><router-link :to="{ name: 'home' }" v-scroll-to="'#contact-us'" v-smooth-scroll>聯絡我們</router-link></li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'news' }"><h3>NEWS</h3></router-link>
          <ul>
            <li><router-link :to="{ name: 'news' }">最新消息</router-link></li>
            <li><router-link :to="{ name: 'news', params: { category: 'events' } }">活動專文</router-link></li>
            <li><router-link :to="{ name: 'news', params: { category: 'interviews' } }">訪談</router-link></li>
            <li><router-link :to="{ name: 'news', params: { category: 'media' } }">媒體報導</router-link></li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'exhibit' }"><h3>EXHIBIT</h3></router-link>
          <ul>
            <li>藝術家</li>
            <li>裝置作品</li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'events' }"><h3>EVENT</h3></router-link>
          <ul>
            <li><router-link :to="{ name: 'events' }">時程表</router-link></li>
            <li><router-link :to="{ name: 'events', params: { category: 'programs' } }">表演節目</router-link></li>
            <li><router-link :to="{ name: 'events', params: { category: 'workshops' } }">講座</router-link></li>
            <li><router-link :to="{ name: 'events', params: { category: 'lectures' } }">工作坊</router-link></li>
            <li><router-link :to="{ name: 'events', params: { category: 'markets' } }">主題市集</router-link></li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'guide' }"><h3>GUIDE</h3></router-link>
          <ul>
            <li>周邊地圖</li>
            <li>交通方式</li>
            <li>停車方式</li>
            <li>乘車優惠</li>
          </ul>
        </li>

        <li>
          <router-link :to="{ name: 'about' }"><h3>ABOUT</h3></router-link>
          <ul>
            <li><router-link :to="{ name: 'about' }" v-scroll-to="'#concept'" v-smooth-scroll>策展理念</router-link></li>
            <li><router-link :to="{ name: 'about' }" v-scroll-to="'#sponsor'" v-smooth-scroll>策展理念</router-link></li>
            <li><router-link :to="{ name: 'about' }" v-scroll-to="'#crew'" v-smooth-scroll>策展團隊</router-link></li>
          </ul>
        </li>
      </ul>

    </div>

    <div class="right-items">
      <a href=""><font-awesome-icon icon="search"></font-awesome-icon></a>
      <a href="https://www.instagram.com/ourminimen/"><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon></a>
      <a href="https://www.facebook.com/AMNTUA/"><font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon></a>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'Navbar',
  components: {
    Logo
  },
  props: {
    in_home: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current_show_menu: false
    }
  },
  methods: {
    toggleNav: function (e) {
      this.current_show_menu = !this.current_show_menu;

      if (e.stopPropagation) {e.stopPropagation();}
      else {e.cancelBubble=true;}

      return false;
    }
  },
}
</script>


<style lang="scss">
  @mixin full-navbar {
    .center-list {
      height: 100vh;

      opacity: 0;
      visibility: hidden;
      > ul {
        flex-direction: column;
        text-align: center;
        justify-content: space-around;
        > li {
          &:hover ul {
            display: none;
          }
        }
        h3 {
          font-size: 3rem;
          color: #fff;
        }
        ul {
          display: none;
        }
      }
    }
    &.active_menu {
      z-index: 10000;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: #00000099;
      .center-list {
        opacity: 1;
        visibility: visible;
      }
    }
    .right-items {
      a {
        color: #fff;
      }
    }
  }
  %full-navbar {
    @include full-navbar;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after, .hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
    background-color: #fff;
  }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after, .hamburger-box {
    width: 30px;
  }
  .hamburger-inner::before {
    top: -9px;
  }
  .hamburger-inner::after {
    bottom: -9px
  }

  .navbar {
    width: 100%;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    .show-navbar {
      display: none!important;
    }

    &.in_home {
      .show-navbar {
        display: block!important;
      }

      @extend %full-navbar;
    }

    .left-items, .center-list, .right-items {
      display: flex;
    }

    .left-items {
      margin-right: auto;
      margin-left: 40px;
      .show-navbar, a {
        z-index: 10000;
        display: inline-block;
        vertical-align: middle;
      }
      .show-navbar {
        font-size: 1.5rem;
        cursor: pointer;
        .hamburger {
          margin-top: 23px;
        }
      }
    }
    .center-list {
      padding: 40px 0;
      margin-left: auto;
      margin-right: auto;

      transition: 1s opacity;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        > li {
          margin: 0 10px;
          position: relative;
          &:hover ul {
            display: block;
          }
          > ul {
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 10px;
            min-width: 140px;

            background-color: #000000aa;
            z-index: 10000;
            display: none;
            > li {
              text-align: center;
              font-size: .9rem;
              line-height: 1.7rem;
              a {
                color: #fff;
              }
            }
          }
        }
        h3 {
          font-size: 1.8rem;
        }
      }
    }
    .right-items {
      margin-left: auto;
      margin-top: 40px;
      margin-right: 40px;
      justify-content: flex-end;
      a {
        margin-left: 10px;
      }
    }
    .left-items, .right-items {
      width: 200px;
    }
  }
  @media screen and (max-width: 768px){
    .navbar {
      .left-items {
        margin-left: 10px;
      }
      .show-navbar {
        display: block!important;
      }
      .center-list {
        ul > li {
          &:hover ul {
            display: none;
          }
        }
      }
      @include full-navbar;

      .center-list {
        position: fixed;
        top: 10vh;
        height: 80vh!important;
      }
    }
  }
</style>