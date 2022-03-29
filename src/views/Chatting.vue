<template>
  <div class="chatting">
    <div class="search"></div>
    <div class="select"></div>
    <div class="chat-users">
      <router-link
        :to="`chatting/${user.first_name}`"
        tag="div"
        class="user"
        v-for="user in users"
        :key="user.id"
        :first_name="user.first_name"
      >
        <div class="media-aside">
          <img src="../assets/profile.png" alt="profile-img" />
        </div>
        <div class="media-body">
          <p class="name">{{ user.first_name }} {{ user.last_name }}</p>
          <div class="last-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut
            earum necessitatibus quidem quos vitae, nemo, officia laudantium
            reprehenderit tempore voluptatibus adipisci omnis nihil deleniti?
            Soluta, quam. Itaque, reprehenderit eius.
          </div>
          <span class="status"></span>
        </div>
      </router-link>
    </div>
    <div class="chat-body"></div>
  </div>
</template>
<script>
import json from "../json/MOCK_DATA";

export default {
  name: "chatting",
  data: function () {
    return {
      users: json,
    };
  },
};
</script>
<style lang="scss" scoped>
.chatting {
  .chat-users {
    width: 96.5%;
    height: 600px;
    margin: auto;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0.25rem;
    overflow-y: scroll;
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

    .user {
      background-color: #242b3d;
      border-bottom: 1px solid #3b4253;
      display: flex;
      padding: 1rem;
      text-decoration: none;
      cursor: pointer;
      .media-aside {
        display: inline-flex;
        flex-wrap: wrap;
        width: 50px;
        margin-right: 10px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
      .media-body {
        width: calc(100% - 100px);
        text-align: left;
        position: relative;
        .name {
          color: #fff;
        }
        .last-message {
          color: #eee;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
