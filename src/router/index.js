import { createRouter, createWebHistory } from "vue-router"; // For Vue 3
import Login from "../views/Login.vue";
// import Login from "../Login.vue";
import Home from "../views/Home.vue";
import Accountstatment from "../views/profile/accountstatment.vue";
import CurrentBet from "../views/profile/current-bet.vue";
import CasinoResults from "../views/profile/casino-results.vue";
import SetButtonValues from "../views/profile/set-button-values.vue";
import GameDetails from "../views/details.vue";
import HeaderGameRender from "@/components/HeaderGameRender.vue";
import LiveCasino from "@/views/others/LiveCasino.vue";
import Teen20CGameComponent from "../views/casino/Teen20CGame.vue";
import Btable2GameComponent from "../views/casino/Btable2Game.vue";
import OurRoulleteComponent from "../views/casino/OurRoullete.vue";
import SuperOver3Component from "../views/casino/superover3.vue";
import GoalComponent from "../views/casino/goal.vue";
import AB4Component from "../views/casino/ab4.vue";
import Lucky15Component from "../views/casino/lucky15.vue";
import Superover2 from "@/views/casino/superover2.vue";
import Teen41Component from "@/views/casino/teen41.vue";
import Teen42Component from "@/views/casino/teen42.vue";
import Sicbo2Component from "@/views/casino/sicbo2.vue";
import SicboComponent from "@/views/casino/sicbo.vue";
import Teen33Component from "@/views/casino/teen33.vue";
import Teen32Component from "@/views/casino/teen32.vue";
import TeenComponent from "@/views/casino/teen.vue";
import Teen20Component from "@/views/casino/teen20.vue";
import FortuneBarishalRangpurRiders from "@/components/cricket-games/Fortune-Barishal-Rangpur-Riders.vue";
import MelbourneStarsSydneySixers from "@/components/cricket-games/Melbourne-Stars-Sydney-Sixers.vue";
import PutintsevaDiShnaider from "@/components/tennis-games/Putintseva-Di-Shnaider.vue";
import MariaHerazoGonzalezMinLiu from "@/components/tennis-games/MariaHerazoGonzalezMinLiu.vue";
import NamDinhBinhDuong from "@/components/football-games/NamDinhBinhDuong.vue";
import ErzurumBBGoztepe from "@/components/football-games/ErzurumBBGoztepe.vue";

// Define routes
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/game/game-details", component: GameDetails },
  { path: "/profile/accountstatment", component: Accountstatment },
  { path: "/profile/current-bet", component: CurrentBet },
  { path: "/profile/casino-results", component: CasinoResults },
  { path: "/profile/set-button-values", component: SetButtonValues },
  { path: "/games/:name/:routeParam", component: HeaderGameRender },
  { path: "/casino/live-casino-list", component: LiveCasino },
  { path: "/casino/Teen20CGame", component: Teen20CGameComponent },
  { path: "/casino/Btable2Game", component: Btable2GameComponent }, // Marked
  { path: "/casino/OurRoullete", component: OurRoulleteComponent }, // Marked
  { path: "/casino/superover3", component: SuperOver3Component }, // Marked
  { path: "/casino/goal", component: GoalComponent }, // Marked
  { path: "/casino/ab4", component: AB4Component },
  { path: "/casino/lucky15", component: Lucky15Component },
  { path: "/casino/superover2", component: Superover2 },
  { path: "/casino/teen41", component: Teen41Component },
  { path: "/casino/teen42", component: Teen42Component },
  { path: "/casino/sicbo2", component: Sicbo2Component },
  { path: "/casino/teen33", component: Teen33Component },
  { path: "/casino/teen32", component: Teen32Component },
  { path: "/casino/teen", component: TeenComponent },
  { path: "/casino/teen20", component: Teen20Component },
  { path: "/casino/sicbo", component: SicboComponent },
  {
    path: "/cricket/860740296",
    component: FortuneBarishalRangpurRiders,
  },
  {
    path: "/cricket/860734296",
    component: MelbourneStarsSydneySixers,
  },
  {
    path: "/tennis/741096639",
    component: MariaHerazoGonzalezMinLiu,
  },
  {
    path: "/tennis/870247821",
    component: PutintsevaDiShnaider,
  },
  {
    path: "/football/494423471",
    component: NamDinhBinhDuong,
  },
  {
    path: "/football/558386227",
    component: ErzurumBBGoztepe,
  },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(), // Using HTML5 History mode
  routes,
});

export default router;
