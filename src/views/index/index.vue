<template>
  <div>
    <header>
      <div class="logo">
        <span>一个饱受摧残的程序员</span>
      </div>
      <div :class="[{'navHidden':navHidden},'nav']">
        <ul>
          <li @click="navHidden=!navHidden">
            <router-link :to="{name:'Index'}" >首页</router-link>
          </li>
          <li @click="navHidden=!navHidden">
            <router-link :to="{name:'Category'}">分类</router-link>
          </li>
          <li @click="navHidden=!navHidden">
            <router-link :to="{name:'MethodEncapsulation'}">方法封装</router-link>
          </li>
          <li @click="navHidden=!navHidden">
            <router-link :to="{name:'SouceCode'}">源码编写</router-link>
          </li>
          <li @click="navHidden=!navHidden">
            <router-link :to="{name:'About'}">关于我</router-link>
          </li>
        </ul>
      </div>
      <div class="bugurid" @click="toggoleNav">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navHidden: true //控制导航栏是否显示
    };
  },
  methods: {
    toggoleNav() {
      this.navHidden = !this.navHidden;
    }
  }
};
</script>
<style scoped>
.bugurid {
  display: none;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 56px;
  background-color: #2b3a42;
}
.logo {
  flex: 1;
  display: flex;
  align-items: center;
  color: #fff;
  padding-left: 20px;
}
.nav {
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 1;
}
.nav > ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #fff;
}
.nav > ul > li {
  list-style: none;
  cursor: pointer;
}
.nav > ul > li > a {
  text-decoration: none;
  color: #fff;
}
@media screen and (max-width: 768px) {
  header{
    z-index: 1;
    position: relative;
  }
  .nav {
    display: block;
    position: absolute;
    margin-top: 56px;
    right: 0px;
    height: 100%;
    width: 200px;
    transition: all 0.3s;
  }
  .bugurid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
  }

  .bugurid > div {
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 2px;
  }
  .nav > ul {
    flex-direction: column;
    background-color: #354954;
    width: 100%;
    height: calc(100vh - 56px);
    align-items: center;
    justify-content: flex-start;
    line-height: 70px;
  }
  .navHidden {
    display: none;
  }
}
</style>