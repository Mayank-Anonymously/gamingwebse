<template>
    <div>
        <AppHeader />
        <div class="container-fluid mx-0 my0 pad-left-0">
            <div class="row">
                <div class="col-md-2">
                    <AppSidebar />

                </div>
                <div class="col-md-2">

                    <LiveCasinoList />
                </div>
                <div class="col-md-10 pad-left-0 mobile-container">
                </div>
                <AppFooter />
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from "../../components/AppHeader.vue";
import AppFooter from "../../components/AppFooter.vue";
import AppSidebar from "../../components/Sidebar.vue";
import LiveCasinoList from "@/components/others/LiveCasinoList.vue";

export default {
    name: "LiveCasino",
    components: {
        AppHeader,
        AppSidebar,
        LiveCasinoList,
        AppFooter,
    },
};
</script>
