<template>
  <div class="home">
    <button class="list" @click="showList()">
      <img src="../assets/icons/list.svg" alt="list">
    </button>
    <button class="to-me" @click="showPosition()">
      <img src="../assets/icons/toMe.svg" alt="toMe">
    </button>

    <mark/>
    <panel/>

<!--    <div class="marker" v-for="(mark, key) in markers" :key="key">-->
<!--      <img src="../assets/icons/marker.svg" alt="marker" class="point">-->
<!--      <img :src="'../assets/images/' + mark.skin" alt="logo" class="skin"/>-->
<!--      <span class="counter">{{mark.count}}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
import Panel from '../components/Panel.vue';
import Marker from "../components/Marker.vue";

export default {
  name: 'Wash',
  components: {
    Panel,
    mark: Marker,
  },
  data() {
    return {
      markers: [
        {skin:"tnk.png", count: 5},
        // {skin:"klo.jpg", count: 2},
      ]
    }
  },
  methods: {
    showList() {
      console.log("List");
    },
    showPosition() {
      console.log("you are here");
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
    .list {
      position: fixed;
      top: 30px;
      left: 30px;
      box-sizing: border-box;
      width: 55px;
      height: 55px;
      padding: 15px 14px;
      border: none;
      box-shadow: 0 5px 10px -5px grey;
      border-radius: 50%;
      background-color: #F6F8F7;
      img {
        width: 100%;
      }
    }
    .to-me {
      position: fixed;
      bottom: 120px;
      right: 20px;
      box-sizing: border-box;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 50%;
      background-color: #F6F8F7;
      box-shadow: 0 5px 10px -5px grey;

    }
  }

  //.marker {
  //  position: absolute;
  //  top: 5%;
  //  left: 50%;
  //  width: 48px;
  //  .point {
  //    width: 100%;
  //    height: 100%;
  //  }
  //  .logo {
  //    position: absolute;
  //    top: -10px;
  //    left: -10px;
  //  }
  //  .counter {
  //    display: block;
  //    box-sizing: border-box;
  //    width: 15px;
  //    height: 15px;
  //    border-radius: 50%;
  //    background-color: green;
  //    color: #fff;
  //    font-size: 10px;
  //  }
  //}
</style>
