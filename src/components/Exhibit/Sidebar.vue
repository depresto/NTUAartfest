<template>
  <div id="exhibit-sidebar">
    <ul>
      <li v-for="(artist, index) in artists" :key="index">
        <router-link :to="{ name: 'exhibit', params: { name: artist.fields.ArtistName }}">
          <div class="left-img">
            <img :src="artist.fields.Avatar" alt="">
          </div>
          <div class="right-text">
            {{artist.fields.ArtistName}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['artists']
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 1px rgba(255,255,255,.5);
}
#exhibit-sidebar {
  border-left: 1px solid #00000055;
  padding-left: 20px;
  ul {
    position:relative;
    z-index: 10000;
    overflow-y: scroll;
    height: 65vh;
    li {
      margin-bottom: 10px;
      a {
        display: flex;
        align-items: center;
        .left-img {
          height: 80px;
          border-radius: 100%;
          background: linear-gradient(#FFB405, #FF0000);
          padding: 4px;
          img {
            height: 100%;
            border-radius: 100%;
            border: 2px solid #fff;
          }
        }
        .right-text {
          font-size: 1.6rem;
          font-weight: bold;
          padding-left: 20px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px){
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
  }
  #exhibit-sidebar {
    ul {
      display: flex;
      height: auto;
      margin-bottom: 20px;
      padding-bottom: 15px;
      li {
        margin-bottom: 0;
        a {
          padding: 0 10px;
          flex-direction: column;
          .left-img {
            height: 70px;
          }
          .right-text {
            font-size: 1rem;
            padding-top: 5px;
            padding-left: 0;
          }
        }
      }
    }
  }
}
</style>