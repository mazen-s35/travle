import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

createApp(App).use(store).use(Vuelidate).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";