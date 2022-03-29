<template>
  <div class="videochat">
    <div id="stream-wrapper">
      <div id="video-streams">
        <h1>{{ timer }}</h1>
      </div>
      <div id="stream-controls">
        <button id="leave-btn" @click="leaveAndRemoveLocalStream()">
          Leave Stream
        </button>
        <button id="mic-btn" @click="toggleMic()">Mic On</button>
        <button id="camera-btn" @click="toggleCamera()">Camera on</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "videochat",
  props: ["timer"],
  methods: {
    ...mapActions(useCounterStore, [
      "leaveAndRemoveLocalStream",
      "toggleCamera",
      "toggleMic",
    ]),
  },
};
</script>
<style lang="scss" scoped>
#video-streams {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  height: 80vh;
  width: 1138px;
  margin: 0 auto;
  h1 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fff;
    z-index: 3;
  }
}

.video-container {
  max-height: 100%;
  border: 2px solid black;
  background-color: #203a49;
}

.video-player {
  width: 100%;
  height: 100%;
}

button {
  border: none;
  background-color: cadetblue;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  margin: 2px;
  cursor: pointer;
}

#stream-controls {
  display: none;
  justify-content: center;
  margin-top: 0.5em;
  @media (max-width: 991px) {
    margin-bottom: 5rem;
  }
}

@media screen and (max-width: 1400px) {
  #video-streams {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 95%;
  }
}
</style>
