<template>
  <div class="marker">
    <img src="../assets/icons/marker.svg" alt="marker" class="point">
<!--    <img :src="mark.skin" alt="logo" class="skin">-->
    <span class="counter">{{count}}</span>
  </div>
</template>

<script>
export default {
  name: "Marker",
//   props: {
//   mark: Object
// },
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
    top: 5%;
    left: 50%;
    width: 48px;
    height: 48px;
    .point {
      width: 100%;
      height: 100%;
    }
    .logo {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .counter {
      display: block;
      box-sizing: border-box;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: green;
      color: #fff;
      font-size: 10px;
    }
  }
</style>
