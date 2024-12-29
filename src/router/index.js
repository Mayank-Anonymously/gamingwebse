import { createRouter, createWebHistory } from "vue-router"; // For Vue 3
import Login from "../views/Login.vue";
// import Login from "../Login.vue";
import Home from "../views/Home.vue";

// Define routes
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(), // Using HTML5 History mode
  routes,
});

export default router;
