<template>
  <div class="home">
    <nav-list/>
    <button class="to-me" @click="showPosition()">
      <img src="../assets/icons/toMe.svg" alt="toMe">
    </button>
    <marker-point v-for="(mark, key) in markers"
                  :key="key"
                  :mark="mark"
                  :style="'top: ' + mark.y + 'px; left: ' + mark.x + 'px'"
    />
    <panel/>
  </div>
</template>

<script>
import Panel from '../components/Panel.vue';
import Marker from "../components/Marker.vue";
import Nav from '../components/Nav'

export default {
  name: 'Wash',
  components: {
    Panel,
    markerPoint: Marker,
    navList: Nav,
  },
  data() {
    return {
      markers: [
        {skin:"tnk.png", count: 5, x:150, y:205},
        {skin:"wog.jpg", count: 2, x:120, y:300},
        {skin:"klo.jpg", count: 0, x:220, y:500},
        {skin:"irbis.jpg", count: 1, x:100, y:50},
      ]
    }
  },
  methods: {
    showPosition() {
      alert("you are here");
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/images/map.png);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    .to-me {
      position: fixed;
      bottom: 120px;
      right: 20px;
      z-index: 10;
      box-sizing: border-box;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      background-color: #F6F8F7;
      box-shadow: 0 5px 10px -5px grey;
      padding-top: 4px;
    }
  }
</style>
