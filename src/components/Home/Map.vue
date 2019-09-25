<template>
  <section id="maps" class="section">
    <div class="page-title">
      <img src="/logo-white.png" alt="">
      <h1>活動地圖</h1>
    </div>

    <div class="container">
      <div class="section_map">
        <img class="map" :src="map" >
        <!-- <div @mouseover='filter = "第一學生活動中心" ' class="mark1">
          <MapMarker fill="#F39800"></MapMarker>
        </div>

        <div @mouseover='filter = "第二學生活動中心" ' class="mark2">
          <MapMarker fill="#E61773"></MapMarker>
        </div>

        <div @mouseover='filter = "舊體育館"' class="mark3">
          <MapMarker fill="#595857"></MapMarker>
        </div>

        <div @mouseover='filter = "鹿鳴廣場"' class="mark4">
          <MapMarker fill="#E60013"></MapMarker>
        </div>

        <div @mouseover='filter = "博雅教學館"' class="mark5">
          <MapMarker fill="#6A3A07"></MapMarker>
        </div>
        
        <div @mouseover='filter = "社科院"' class="mark6">
          <MapMarker  fill="#601986"></MapMarker>
        </div>

        <div @mouseover='filter = "陳文成紀念廣場"' class="mark7">
          <MapMarker  fill="#CC530D"></MapMarker>
        </div>

        <div @mouseover='filter = "振興草皮"' class="mark8">
          <MapMarker  fill="#3E16FF"></MapMarker>
        </div>

        <div @mouseover='filter = "總圖"' class="mark9">
          <MapMarker  fill="#616FED"></MapMarker>
        </div> -->

      </div>
    </div>
    <!-- <div class="container">
      <div class="information">
        <div
          v-bind:style="{ color: now_area[0].color }"
          class="place"
        >
          {{now_area[0].place}}
        </div>
        <div v-for="(item, index) in now_area[0].actives" :key="index" class="p">
          <div>{{ item.active}}</div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import MapMarker from '@/components/Home/MapMarker';
import placeData from '@/data/placeData';
export default {
  components: {
    MapMarker,
  },
  data() {
    return {
      map: 'https://i.imgur.com/Q7c4Kao.png',
      place: placeData,
      filter: '',
    };
  },
  computed: {
    now_area() {
      return this.place.filter(obj => obj.place === this.filter);
    },
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
  padding: 10px 20px;
  margin-top: 20px;
  z-index: 1000;
}
.place {
  font-size: 1.5em;
  margin: 10px 0;
}
</style>

<style lang="scss">
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
  top: 34%;
  left: 57%;
}
.mark2 {
  position: absolute;
  top: 60%;
  left: 30%;
}
.mark3 {
  position: absolute;
  top: 22%;
  left: 31.5%;
}
.mark4 {
  position: absolute;
  top: 55%;
  left: 40%;
}
.mark5 {
  position: absolute;
  top: 27%;
  left: 36%;
}
.mark6 {
  position: absolute;
  top: 17%;
  left: 66%;
}
.mark7 {
  position: absolute;
  top: 34%;
  left: 51%;
}
.mark8 {
  position:  absolute;
  top: 39%; 
  left: 51%;
}
.mark9 {
  position: absolute;
  top: 39%;
  left: 56%;
}
@media only screen and (max-width: 768px) {
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
    color: #fff;
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
