import { defineStore } from "pinia";
//firebase
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
//agora
import AgoraRTC from "agora-rtc-sdk-ng";
import { useRouter } from "vue-router";
export const RTC = defineStore({
  id: "RTC",
  state: () => ({
    RTCclient: AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }),
    search: "",
    // you should add your appId here from agora.io after making an account
    appId: "f58c8e903d44449bb38abb1776060cd6",
    // generate rtc token after naming your channel
    channel: "main",
    // the token :>
    token:
      "006f58c8e903d44449bb38abb1776060cd6IAB1DXKEQTLxoXjIeJc1FYpQOoqcSZTpEpf4KNW7ChqwgmTNKL8AAAAAEACKbcvBWvFiYgEAAQBa8WJi",
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
      await this.RTCclient.subscribe(user, mediaType);

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
        let uid = (this.uid = await this.RTCclient.join(
          this.appId,
          this.channel,
          this.token,
          null
        ));
        this.RTCclient.on("user-published", this.handleUserJoined);
        this.RTCclient.on("user-left", this.handleUserLeft);
        this.RTCclient.on("liveStreamingStarted");

        this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
        await this.RTCclient.publish([
          this.localTracks[0],
          this.localTracks[1],
        ]);
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
      await this.RTCclient.leave();
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
