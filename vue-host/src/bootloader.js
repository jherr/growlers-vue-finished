import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";
import { load } from "growlers/store";

load("hv-taplist");

createApp(App).mount("#app");
