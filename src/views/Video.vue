<template>
  <div class="videos">
    <videochat :timer="timer"></videochat>
  </div>
</template>
<script>
import videochat from "../components/VideoChat.vue";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "videos",
  data() {
    return {
      timerCount: "40000", // it depends on user tokens // seconds
      timer: "", // its timercount but hour:min:sec
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["leaveAndRemoveLocalStream"]),
  },
  components: {
    videochat,
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            let sec = Math.floor((this.timerCount % 3600) % 60);
            let min = Math.floor((this.timerCount % 3600) / 60);
            let hou = Math.floor(this.timerCount / 3600);
            if (min.toString().length <= 1) {
              min = "0" + min.toString();
            }
            if (hou.toString().length <= 1) {
              hou = "0" + hou.toString();
            }
            this.timer = hou + ":" + min + ":" + sec;
          }, 1000);
        }
        if (value == 60) {
          alert("30 second left !!!");
        }
        if (value == 0) {
          leaveAndRemoveLocalStream();
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>
<style lang="scss">
.videos {
  width: 96.5%;
  margin: auto;
}
</style>
