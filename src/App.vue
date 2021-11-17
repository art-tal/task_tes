<template>
  <div id="app">
    <wash/>
  </div>
</template>

<script>
import Wash from "./views/Wash";
export default {
  name: 'app',
  components: {
    Wash
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
