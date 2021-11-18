<template>
  <nav>
    <button class="list" @click.prevent="showList()">
      <img src="../assets/icons/list.svg" alt="list">
    </button>

    <ul class="dropdown" v-if="show">
      <li
          v-for="item in list"
          :key="item.id"
          :class="{active: item.isActive}"
          @click="activeLink(item)"
      >{{ item.id }}</li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      show: false,
      list: [
        {id: 'Home', link: '/home', isActive: false},
        {id: 'Buy', link: '/buy', isActive: false},
        {id: 'About', link: '/about', isActive: false},
        {id: 'Contact', link: '/contact', isActive: false}
      ]
    }
  },
  methods: {
    showList() {
      this.show = !this.show;
      console.log(this.show);
    },

    activeLink(link) {
      this.list.forEach( (item) => {
        if(item.id === link.id) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });

    }
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
  top: 100px;
  left: 30px;
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
