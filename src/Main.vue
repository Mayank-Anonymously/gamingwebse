<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0 mobile-container">
          <MainContainer />
        </div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppFooter from "./components/AppFooter.vue";
import AppSidebar from "./components/Sidebar.vue";
// import MainContainer from "./components/MainContainer.vue";
import MainContainer from "./components/HeaderTabsTable.vue";

import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/responsive.css";
import "./css/style.css";

export default {
  name: "MainView",
  components: {
    AppHeader,
    AppSidebar,
    MainContainer,
    AppFooter,
  },
};
</script>
