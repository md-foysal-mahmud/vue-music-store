import "./assets/main.css";
import "./assets/base.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";

const app = createApp(App);

app.use(router);
app.use(VeeValidatePlugin);

app.use(createPinia());
app.mount("#app");
