<template>
  <div id="app">
    <Header></Header>
    <div class="right-left-sidebar col-md-0">
      <Sidebar></Sidebar>
    </div>
    <div class="home">
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "@/components/global/App-header.vue";
import Sidebar from "@/components/global/App-sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import "./style/reset.scss";
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #161e30;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
  /* Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 10px;
    opacity: 0.9;
  }
  &::-webkit-scrollbar-track {
    background-color: #fcfcfc;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 15px;
    border-radius: 15px;
    background: #b4b7bd;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.right-left-sidebar {
  width: 20%;
  @media (max-width: 1284px) {
    width: 10%;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 8%;
  }
}
.home {
  width: 80%;
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1284px) {
    width: 90%;
  }
  @media (max-width: 991px) {
    width: 100%;
    height: 92%;
    margin-bottom: 0;
    overflow-y: scroll;
  }
}
</style>
