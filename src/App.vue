<template>
  <div id="app" 
    @resize="resizeCanvas"
    @mousedown="canvasMouseDown"
    @mousemove="canvasMouseMove"
    @mouseup="canvasMouseUp"
    @mouseleave="canvasMouseLeave"
    style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" 
    unselectable="on"
    onselectstart="return false;" 
    onmousedown="return false;">
    <img id="pattern" src="/transparent.png" alt="">
    <canvas id="canvas" width="490" height="220"></canvas>

    <router-view></router-view>

    <transition name="fade">
      <Loading v-if="loading"></Loading>
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
export default {
  name: 'app',
  data() {
    return {
      loading: true,
      clickX: new Array(),
      clickY: new Array(),
      clickDrag: new Array(),
      paint: false
    }
  },
  components: {
    Loading,
  },
  created() {
    this.$store.dispatch('artists/getArtistData');
    this.$store.dispatch('artists/getEventData');
    this.$store.dispatch('artists/getNewsData');
    this.$store.dispatch('artists/getPlaceData');
    this.$store.dispatch('artists/getHomeData');
  },
  mounted() {
    var vm = this;
    setTimeout(() => {
      vm.loading = false;
    }, 1000);
    vm.resizeCanvas();
  },
  methods: {
    redraw: function(){
      var context = document.getElementById('canvas').getContext("2d");
      var image = document.getElementById("pattern");
      var pattern = context.createPattern(image, "repeat");

      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
      
      context.strokeStyle = pattern;
      context.lineJoin = "round";
      context.lineWidth = 5;
      
      for(var i=0; i < this.clickX.length; i++) {		
        context.beginPath();
        if(this.clickDrag[i] && i){
          context.moveTo(this.clickX[i-1], this.clickY[i-1]);
        }else{
          context.moveTo(this.clickX[i]-1, this.clickY[i]);
        }
        context.lineTo(this.clickX[i], this.clickY[i]);
        context.closePath();
        context.stroke();
      }
    },
    addClick: function (x, y, dragging) {
      this.clickX.push(x);
      this.clickY.push(y);
      this.clickDrag.push(dragging);
    },
    clearCanvas: function () {
      this.clickX = new Array();
      this.clickY = new Array();
      this.clickDrag = new Array();
      this.redraw();
    },
    resizeCanvas: function () {
      var canvas = document.getElementById('canvas');

      var displayWidth  = canvas.clientWidth;
      var displayHeight = canvas.clientHeight;
    
      if (canvas.width  != displayWidth || canvas.height != displayHeight) {
        canvas.width  = displayWidth;
        canvas.height = displayHeight;
      }
    },
    canvasMouseDown: function (e) {
      var context = document.getElementById('canvas');

      if (['/'].includes(this.$route.path)) {
        return false;
      }

      this.paint = true;
      this.addClick(e.clientX - context.offsetLeft, e.clientY - context.offsetTop);
      this.redraw();
    },
    canvasMouseMove: function (e) {
      var context = document.getElementById('canvas');

      if (['/'].includes(this.$route.path)) {
        return false;
      }

      if (this.paint){
        this.addClick(e.clientX - context.offsetLeft, e.clientY - context.offsetTop, true);
        this.redraw();
      }
    },
    canvasMouseUp: function () {
      let vm = this;
      vm.paint = false;

      setTimeout(() => {
        vm.clearCanvas();
      }, 5000);
    },
    canvasMouseLeave: function () {
      this.paint = false;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";

#pattern {
  z-index: -1;
  display: none;
}
canvas {
  z-index: 0;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
}
</style>