<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0 pad-left-0 mobile-container">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0">
          <MainContainer />
        </div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import AppSidebar from "../components/Sidebar.vue";
import MainContainer from "../components/MainContainer.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppSidebar,
    MainContainer,
    AppFooter,
  },
};
</script>
