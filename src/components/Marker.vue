<template>
  <div class="marker">
    <img src="../assets/icons/marker.svg" alt="marker" class="point">
    <img :src="require('../assets/images/' + mark.skin)" alt="logo" class="skin">
    <span class="counter">{{mark.count}}</span>
  </div>
</template>

<script>
export default {
  name: "Marker",
  props: {
  mark: Object
},
  data() {
    return {
      count: 0,
    }
  }
}
</script>

<style scoped lang="scss">
  .marker {
    position: absolute;
    width: 48px;
    .point {
      width: 100%;
      height: 100%;
    }
    .skin {
      position: absolute;
      top: 5px;
      left: 12px;
      width: 23px;
      height: 23px;
      border-radius: 50%;
    }
    .counter {
      display: block;
      position: absolute;
      top: -3px;
      right: 10px;
      z-index: 5;
      box-sizing: border-box;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      padding: 2px;
      background-color: green;
      color: #fff;
      font-size: 10px;
    }
  }
</style>
