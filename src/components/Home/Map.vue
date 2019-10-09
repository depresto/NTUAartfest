<template>
  <section id="maps" class="section">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>活動地圖</h1>
    </div>

    <div class="container">
      <div class="section_map">
        <img class="map animated-background" :src="map" >
        <div @mouseover='filter = "A" ' class="mark1">
          <img class="mark-img" src="/map/tag_a.png" alt="">
        </div>

        <div @mouseover='filter = "B" ' class="mark2">
          <img class="mark-img" src="/map/tag_b.png" alt="">
        </div>

        <div @mouseover='filter = "C"' class="mark3">
          <img class="mark-img" src="/map/tag_c.png" alt="">
        </div>

        <div @mouseover='filter = "D"' class="mark4">
          <img class="mark-img" src="/map/tag_d.png" alt="">
        </div>

        <div @mouseover='filter = "E"' class="mark5">
          <img class="mark-img" src="/map/tag_e.png" alt="">>
        </div>
        
        <div @mouseover='filter = "I"' class="mark6">
          <img class="mark-img" src="/map/tag_i.png" alt="">
        </div>

        <div @mouseover='filter = "J"' class="mark7">
          <img class="mark-img" src="/map/tag_j.png" alt="">
        </div>

        <div @mouseover='filter = "K"' class="mark8">
          <img class="mark-img" src="/map/tag_k.png" alt="">
        </div>

        <div @mouseover='filter = "BUS_A"' class="mark9">
          <img class="mark-img" src="/map/tag_bus.png" alt="">
        </div>

        <div @mouseover='filter = "BUS_B"' class="mark10">
          <img class="mark-img" src="/map/tag_bus.png" alt="">
        </div>

        <div @mouseover='filter = "BUS_C"' class="mark11">
          <img class="mark-img" src="/map/tag_bus.png" alt="">
        </div>

        <div @mouseover='filter = "MRT"' class="mark12">
          <img class="mark-img" src="/map/tag_mrt.png" alt="">
        </div>

        <div @mouseover='filter = "TRAIN"' class="mark13">
          <img class="mark-img" src="/map/tag_train.png" alt="">
        </div>

      </div>
    </div>
    <div class="container">
      <div class="information" v-if="now_area[0]">
        <div v-bind:style="{ color: now_area[0].fields.Color }" class="place">
          {{now_area[0].fields.Name}}
        </div>

        <div class="p">{{now_area[0].fields.Content}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import placeData from '@/data/placeData';
export default {
  data() {
    return {
      map: 'https://i.imgur.com/Q7c4Kao.png',
      place: placeData,
      filter: '',
    };
  },
  computed: {
    ...mapState({
      place_data: state => state.artists.place_data
    }),
    now_area() {
      return this.place_data.filter(obj => obj.fields.Mark === this.filter);
    }
  },
};
</script>

<style scoped lang="scss">
#maps {
  .page-title {
    padding-bottom: 20px;
  }
}
.section {
  height: auto;
  width: 100%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.section_map {
  width: 600px;
  position: relative;
  height: 540px;
  margin-top: 20px;
}
.map {
  width: 600px;
  position: relative;
  height: 540px;
}
.mark-img {
  width: 17px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
}
.marker {
  transition: .2s;
  opacity: 0.8;
  &:hover {
    transform: scale(1.3);
  }
  .svg-fill-1 {
    fill: #F39800;
  }
  .svg-fill-2 {
    fill: #E61773;
  }
}
.information {
  width: 300px;
  color: #000;
  line-height: 1.5rem;
  text-align: left;
  background-color: #DDDDDD;
  padding: 20px 30px;
  margin-top: 20px;
  z-index: 1000;
}
.place {
  font-size: 1.5em;
  margin: 10px 0;
}
.p {
  white-space: pre-line;
  margin-bottom: 10px;
}
</style>

<style lang="scss" scoped>
.marker {
  transition: .2s;
  opacity: 0.8;
  width: 22px;
  height: 30px;
  &:hover {
    transform: scale(1.3);
  }
}
.mark1 {
  position: absolute;
  top: 37.2%;
  left: 52.9%;
}
.mark2 {
  position: absolute;
  top: 27%;
  left: 50.7%;
}
.mark3 {
  position: absolute;
  top: 27.8%;
  left: 55.5%;
}
.mark4 {
  position: absolute;
  top: 27%;
  left: 58.5%;
}
.mark5 {
  position: absolute;
  top: 25.2%;
  left: 61%;
}
.mark6 {
  position: absolute;
  top: 39.2%;
  left: 46%;
}
.mark7 {
  position: absolute;
  top: 38.1%;
  left: 49.8%;
}
.mark8 {
  position:  absolute;
  top: 82%; 
  left: 19.5%;
}
.mark9 {
  position: absolute;
  top: 21.5%;
  left: 67%;
}
.mark10 {
  position: absolute;
  top: 37.2%;
  left: 40%;
}
.mark11 {
  position: absolute;
  top: 84.1%; 
  left: 34%;
}
.mark12 {
  position: absolute;
  top: 14%;
  left: 86.3%;
  img {
    width: 30px;
  }
}
.mark13 {
  position:  absolute;
  top: 67.5%; 
  left: 5.5%;
  img {
    width: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .mark-img {
    width: 9px;
  }
  .mark12 {
    top: 13.5%;
    img {
      width: 14px;
    }
  }
  .mark13 {
    top: 67%;
    img {
      width: 10px;
    }
  }
  .marker {
    transition: .2s;
    opacity: 0.8;
    width: 10px;
    height: 14px;
    &:hover {
      transform: scale(1.5);
    }
  }
}
</style>
<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .section {
    display: block;
    height: 580px;
  }
  .section_map {
    width: 300px;
    height: 270px;
    margin: 20px auto;
  }
  .h2 {
    display: block;
    position: relative;
    font-size: 1.35em;
    padding-bottom: 1em;
  }
  .map {
    width: 300px;
    height: 270px;
    margin: 0 auto;
  }
  svg {
    width: 18px;
    height: 22px;
  }
  .information {
    width: 100%;
    position:relative;
    top: auto;
    right: auto;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  .place {
    font-size: 1.0em;
  }
  .p {
    font-size: 0.8em;
    line-height: 1.2em;
  }
}
</style>
