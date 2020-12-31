import { createApp } from "vue";

import "./index.scss";

import App from "./App";
import { load } from "./store";

load("hv-taplist");

createApp(App).mount("#app");
