import { defineStore } from "pinia";
import AgoraRTC from "agora-rtc-sdk-ng";
let client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    search: "",
    // you should add your appId here from agora.io after making account
    appId: "f58c8e903d44449bb38abb1776060cd6",
    // generate rtc token after naming your channel
    channel: "main",
    // the token :>
    token:
      "006f58c8e903d44449bb38abb1776060cd6IADBUmCc3zEJ+BsbyD5Hxt/xuB5u2NuoKTCbMyLCOWuWTGTNKL8AAAAAEADnfDPKnm4zYgEAAQCcbjNi",
    // for audio and video paths
    remoteTracks: {},
    localTracks: [],
    //every user have uid :>
    uid: undefined,
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
  },

  actions: {
    channelName(f, l) {
      this.channel = f + " " + l;
      this.channel = "main";
    },
    async handleUserJoined(user, mediaType) {
      this.remoteTracks[user.uid] = user;
      await client.subscribe(user, mediaType);

      if (mediaType === "video") {
        let player = document.getElementById(`user-container-${user.uid}`);
        if (player != null) {
          player.remove();
        }

        player = `<div class="video-container" style="margin: 11px" id="user-container-${user.uid}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${user.uid}"></div>
                    </div>`;
        document
          .getElementById("video-streams")
          .insertAdjacentHTML("beforeend", player);

        user.videoTrack.play(`user-${user.uid}`);
      }

      if (mediaType === "audio") {
        user.audioTrack.play();
      }
    },

    async handleUserLeft(user) {
      delete this.remoteTracks[user.uid];
      document.getElementById(`user-container-${user.uid}`).remove();
    },
    // the main fuction to create stream
    async createStreams() {
      if (this.channel) {
        let uid = (this.uid = await client.join(
          this.appId,
          this.channel,
          this.token,
          null
        ));
        client.on("user-published", this.handleUserJoined);
        client.on("user-left", this.handleUserLeft);
        client.on("liveStreamingStarted");

        this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
        await client.publish([this.localTracks[0], this.localTracks[1]]);
        let player = `<div class="video-container" style="margin: 11px" id="user-container-${uid}">
                        <div class="video-player" style="width: 100%; height: 100%; object-fit: cover;" id="user-${uid}"></div>
                    </div>`;
        document
          .getElementById("video-streams")
          .insertAdjacentHTML("beforeend", player);
        this.localTracks[1].play(`user-${uid}`);
        document.getElementById("stream-controls").style.display = "flex";
      } else {
        alert("this user is busy");
      }
    },
    async leaveAndRemoveLocalStream() {
      for (let i = 0; this.localTracks.length > i; i++) {
        this.localTracks[i].stop();
        this.localTracks[i].close();
      }
      // to leave stream simply :>
      await client.leave();
      document.getElementById("stream-controls").style.display = "none";
      document.getElementById("video-streams").innerHTML = "";
    },
    //toggle mic (no shit)
    async toggleMic() {
      if (this.localTracks[0].muted) {
        await this.localTracks[0].setMuted(false);
        document.getElementById("mic-btn").innerText = "Mic on";
        document.getElementById("mic-btn").style.backgroundColor = "cadetblue";
      } else {
        await this.localTracks[0].setMuted(true);
        document.getElementById("mic-btn").innerText = "Mic off";
        document.getElementById("mic-btn").style.backgroundColor = "#EE4B2B";
      }
    },
    //toggle video path
    async toggleCamera() {
      if (this.localTracks[1].muted) {
        await this.localTracks[1].setMuted(false);
        document.getElementById("camera-btn").innerText = "Camera on";
        document.getElementById("camera-btn").style.backgroundColor =
          "cadetblue";
      } else {
        await this.localTracks[1].setMuted(true);
        document.getElementById("camera-btn").innerText = "Camera off";
        document.getElementById("camera-btn").style.backgroundColor = "#EE4B2B";
      }
    },
  },
});
