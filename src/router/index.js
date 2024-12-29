import { createRouter, createWebHistory } from "vue-router"; // For Vue 3
import Login from "../views/Login.vue";
// import Login from "../Login.vue";
import Home from "../views/Home.vue";
import Accountstatment from "@/views/profile/accountstatment.vue";
import CurrentBet from "@/views/profile/current-bet.vue";
import CasinoResults from "@/views/profile/casino-results.vue";
import SetButtonValues from "@/views/profile/set-button-values.vue";

// Define routes
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/profile/account-statement", component: Accountstatment },
  { path: "/profile/current-bets", component: CurrentBet },
  { path: "/profile/casino-results", component: CasinoResults },
  { path: "/profile/set-button-values", component: SetButtonValues },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(), // Using HTML5 History mode
  routes,
});

export default router;
