import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);
//When adding external properties, class instances that come from other libraries, or simply things that are not reactive, you should wrap the object with markRaw() before passing it to pinia.
import { markRaw } from "vue";
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(router);

app.use(createPinia());
app.use(router);

app.mount("#app");
