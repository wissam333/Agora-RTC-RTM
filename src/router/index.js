import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue";
import star from "../views/SuperStar.vue";
import video from "../views/Video.vue";
import Friends from "../views/Friends.vue";
import chatting from "../views/Chatting.vue";
import Global from "../views/Global.vue";
import ChattingBody from "../views/ChattingBody.vue";
import login from "../views/Login.vue";

import { auth } from "../firebase";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/star",
      name: "star",
      component: star,
    },
    {
      path: "/video",
      name: "video",
      component: video,
    },
    {
      path: "/Friends",
      name: "Friends",
      component: Friends,
    },
    {
      path: "/chatting",
      name: "chatting",
      component: chatting,
    },
    {
      path: "/:first_name",
      name: "ChattingBody",
      component: ChattingBody,
      props: true,
    },
    {
      path: "/global",
      name: "global",
      component: Global,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
  ],
});

export default router;
