<template>
  <div class="home">
    <button class="list" @click="showList()">
      <img src="../assets/icons/list.svg" alt="list">
    </button>
    <button class="to-me" @click="showPosition()">
      <img src="../assets/icons/toMe.svg" alt="toMe">
    </button>
    <panel msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from '@/components/Panel.vue'

export default {
  name: 'Wash',
  components: {
    Panel
  },
  methods: {
    showList() {},
    showPosition() {
      console.log("you are here");
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
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
</style>