import { createApp } from "vue"; // Ensure you import createApp from 'vue'
import App from "./App.vue"; // Your main App component

// Import CSS files
import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/responsive.css";
import "./css/style.css";

// Import Font Awesome and add icons to the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

// Import the router
import router from "./router/index"; // Your Vue Router file

// Add icons to the library
library.add(fas, far, fab);

// Create the app and use Vue Router
const app = createApp(App);

// Register FontAwesome globally
app.component("font-awesome-icon", FontAwesomeIcon);

// Use the router with the app
app.use(router);

// Mount the app to the DOM
app.mount("#app");
