import Vue from "vue";
import App from "./App.vue";
import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/responsive.css";
import "./css/style.css";

// Import Font Awesome core
import { library } from "@fortawesome/fontawesome-svg-core";
// Import Font Awesome Vue component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";

// Import icons
import { fas } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import { far } from "@fortawesome/free-regular-svg-icons"; // Regular icons
import { fab } from "@fortawesome/free-brands-svg-icons"; // Brand icons

// Add icons to the library
library.add(fas, far, fab);

// Register the FontAwesomeIcon component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
