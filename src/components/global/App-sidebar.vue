<template>
  <div class="sidebar">
    <nav class="left-side">
      <ul>
        <li class="logo">
          <img src="../../assets/1.png" alt="LOGO" />
        </li>
        <router-link to="/" tag="li">
          <i class="fas fa-home"></i>
          <p>Home</p>
        </router-link>
        <router-link to="/star" tag="li">
          <i class="fas fa-star"></i>
          <p>Laddar</p>
        </router-link>
        <router-link to="/Friends" tag="li">
          <i class="fas fa-user-friends"></i>
          <p>Friends</p>
        </router-link>
        <router-link to="/chatting" tag="li">
          <i class="fas fa-comment-dots"></i>
          <p>Chat</p>
        </router-link>
        <router-link to="/global" tag="li">
          <i class="fas fa-globe"></i>
          <p>Global</p>
        </router-link>
        <router-link
          class="stream"
          tag="li"
          to="/video"
          id="join-btn"
          @click.native="createStreams()"
          ><i class="fas fa-video"></i
        ></router-link>
      </ul>
    </nav>

    <div class="right-side">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../../stores/counter";

export default {
  name: "Sidebar",
  data: function () {
    return {
      active: "home",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["createStreams"]),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 991px) {
    width: 100%;
    justify-content: space-around;
    bottom: 0;
    z-index: 2;
    background-color: #d5d5d5;
  }
  .left-side {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    background-color: #283046;
    @media (max-width: 991px) {
      height: auto;
    }
    /* Scrollbar Styling */
    &::-webkit-scrollbar {
      width: 8px;
      opacity: 0.9;
    }
    &::-webkit-scrollbar-track {
      background-color: #242834;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 15px;
      border-radius: 15px;
      background: #363d4f;
    }
    ul {
      .logo {
        img {
          width: 4rem;
        }
      }
      a,
      .logo {
        color: #2c3e50;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 12px 20px;
        margin: 30px 0;
        text-decoration: none;
        cursor: pointer;
        @media (max-width: 991px) {
          margin: 0;
        }
        @media (max-width: 426px) {
          padding: 4px 9px;
        }
        svg {
          display: flex;
          font-size: 27px !important;
          color: #fff;
        }
        p {
          font-size: 12px;
          font-weight: 400;
          line-height: 1.33;
          margin-left: 10px;
          color: #fff;
        }
        &.router-link-exact-active {
          background-color: #8aa9c9;
        }
        &:not(:first-of-type):hover {
          background-color: #8aa9c9;
        }
        &.stream {
          svg {
            color: #f43c3c;
          }
        }
      }
      @media (max-width: 991px) {
        display: inline-flex;
        li:first-of-type {
          display: none;
        }
      }
    }
  }
  .right-side {
    background-color: #161e30;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    /* Scrollbar Styling */
    &::-webkit-scrollbar {
      width: 8px;
      opacity: 0.9;
    }
    &::-webkit-scrollbar-track {
      background-color: #28304666;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-border-radius: 15px;
      border-radius: 15px;
      background: #283046;
    }
    .card {
      padding: 70px;
      margin: 10px;
      margin-right: 22px;
      background-color: #283046;
      border: 1px solid #3b4253;
    }
    @media (max-width: 1284px) {
      display: none;
    }
  }
}
</style>
