<template>
  <div>
    <button class="list" @click.prevent="showList()">
      <img src="../assets/icons/list.svg" alt="list">
    </button>

    <ul class="dropdown" v-if="show">
      <router-link
          v-for="item in list"
          :key="item.id"
          tag="li"
          :to="item.link"
          exact
          @click.stop="alert(item.id)"
      >{{ item.id }}</router-link>
    </ul>
  </div>

</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      show: false,
      list: [
        {id: 'Home', link: '/'},
        {id: 'Buy', link: '/'},
        {id: 'About', link: '/'},
        {id: 'Contact', link: '/'}
      ]
    }
  },
  methods: {
    showList() {
      this.show = !this.show;
    },
  }

}
</script>

<style scoped lang="scss">
.list {
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 10;
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
.dropdown {
  position: absolute;
  bottom: -215px;
  left: 0;
  text-align: left;
  background-color: #d9d9d9;
  li {
    padding: 15px 35px;
    font-size: 18px;
    &:hover {
      background-color: #969494;
    }
  }

  .active {
    background-color: #969494;
  }
}
</style>
