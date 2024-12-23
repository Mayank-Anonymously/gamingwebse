import Vue from "vue";
import App from "./App.vue";
import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/responsive.css";
import "./css/style.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
