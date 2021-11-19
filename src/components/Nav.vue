<template>
  <nav>
    <button class="list" @click.prevent="showList()">
      <transition name="fade">
        <img src="../assets/icons/close.svg" alt="list" v-if="show">
        <img src="../assets/icons/list.svg" alt="list" v-else class="img_list">
      </transition>
    </button>

    <transition name="fade">
    <ul class="dropdown" v-if="show">
      <li
          v-for="item in list"
          :key="item.id"
          :class="{active: item.isActive}"
          @click="activeLink(item)"
      >{{ item.id }}</li>
    </ul>
    </transition>
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
    &.img_list {
      padding-top: 4px;
    }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
