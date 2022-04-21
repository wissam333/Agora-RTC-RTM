<template>
  <div class="users">
    <div
      class="card col-lg-3 col-md-4"
      v-for="user in filterdUsers"
      :key="user.id"
      v-show="user.friend"
    >
      <div class="profile-img">
        <img src="../assets/profile.png" alt="" />
        <span class="online" :class="user.online ? 'active' : ''"></span>
      </div>
      <div class="cardBody">
        <div class="desc">
          <h5>{{ user.first_name }} {{ user.last_name }}</h5>
          <p>SuperStar: {{ user.star / 100 }}!</p>
          <p>Gender: {{ user.gender }}</p>
          <div id="stream-wrapper">
            <div id="video-streams"></div>
          </div>

          <router-link
            class="btn btn-success"
            tag="button"
            to="/video"
            id="join-btn"
            @click.native="
              channelName(user.first_name, user.last_name);
              createStreams();
            "
            v-show="user.online"
            >Join Stream</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from "../json/MOCK_DATA";
import { mapActions } from "pinia";
import { RTC } from "../stores/counter";

export default {
  name: "friends",
  data: function () {
    return {
      users: json,
    };
  },
  methods: {
    ...mapActions(RTC, ["createStreams", "channelName"]),
  },
  computed: {
    filterdUsers: function () {
      return this.users.filter((user) => {
        return (
          user.first_name.match(this.$root.search) ||
          user.last_name.match(this.$root.search)
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/users.scss";
</style>
