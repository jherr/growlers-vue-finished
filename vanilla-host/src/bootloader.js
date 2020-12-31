import "./index.scss";

import { load, subscribe } from "growlers/store";
import mountTaps from "growlers/VanillaTaps";
import mountSearch from "growlers/VanillaSearch";
import mountCart from "growlers/VanillaCart";

load("hv-taplist");

// mountTaps("#taps");
// mountSearch("#search");
// mountCart("#cart");

subscribe(({ filteredTaps }) => {
  document.getElementById("like").innerText = filteredTaps
    .slice(0, 3)
    .map(({ beverageName }) => beverageName)
    .join(", ");
});
