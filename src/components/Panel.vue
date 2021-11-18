<template>
  <div class="panel">
    <button class="gas-station" @click="goHome()">
      <img src="../assets/icons/home.svg" alt="home">
    </button>
    <button class="gas-station" @click="showStations()">
      <img src="../assets/icons/fuel.svg" alt="fuel">
    </button>
    <button class="qr-code" @click="getQr()">
      <img src="../assets/icons/qr.svg" alt="qr" class="qr">
    </button>
    <button class="marker" @click="showMarker()">
      <img src="../assets/icons/poiner.svg" alt="pointer">
    </button>
    <button class="more" @click="showMore()">
      <span class="sircle"></span><span class="sircle"></span><span class="sircle"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  methods: {
    goHome() {
      console.log('This is Home');
      alert('This is Home');
    },

    showStations() {
      alert('Gas stations');
    },

    getQr() {
      alert("QR-code");
    },

    showMore() {
      alert("More");
    },

    showMarker() {
      alert("Marker");
    }
  }
}
</script>

<style scoped lang="scss">
  .panel {
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    position: fixed;
    max-width: 400px;
    border-radius: 25px ;
    height: 50px;
    margin: auto;
    bottom: 20px;
    left: 20px;
    right: 20px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 5px 6px -3px grey;
    button {
      width: 36px;
      height: 36px;
      border: snow;
      background-color: rgba(255,255,255,0);
      img {
        width: 100%;
      }
      &.qr-code {
        position: relative;
        top: -100%;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 12px;
        background-color: #43B2E7;
      }
      .sircle {
        vertical-align: middle;
        display: inline-block;
        width: 4px;
        height: 4px;
        border: 1px solid gray;
        border-radius: 50%;
        margin-right: 2px;
      }
    }
  }
</style>
