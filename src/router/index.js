import { createRouter, createWebHistory } from "vue-router"; // For Vue 3
import Home from "../Login.vue";
import About from "../Main.vue";

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/home", component: About },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(), // Using HTML5 History mode
  routes,
});

export default router;
