<template>
  <div>
    <AppHeader />
    <LiveCasinoList />

    <div class="container-fluid mx-0 my0 pad-left-0">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0 mobile-container">
          <div
            v-if="
              filteredData &&
              filteredData.match &&
              filteredData.match.length > 0
            "
          >
            <div class="bet-table">
              <!-- Table Header -->
              <div class="bet-table-header">
                <div class="bet-nation-name"><b>Game</b></div>
                <div class="bet-nation-odd"><b>1</b></div>
                <div class="bet-nation-odd"><b>X</b></div>
                <div class="bet-nation-odd"><b>2</b></div>
              </div>

              <!-- Table Body -->
              <div class="bet-table-body">
                <div
                  class="bet-table-row"
                  v-for="(match, index) in filteredData.match"
                  :key="index"
                >
                  <!-- Game Info -->
                  <div class="bet-nation-name">
                    <a :href="match.gameLink" class="bet-nation-game-name">
                      <span>{{ match.gameName }}</span>
                      <span class="d-none d-md-inline-block">&nbsp;&nbsp;</span>
                      <span>{{ match.date }}</span>
                    </a>
                    <div class="game-icons">
                      <div
                        class="game-icon"
                        v-for="(icon, idx) in match.gameIcons"
                        :key="idx"
                      >
                        <span
                          v-if="icon.type === 'active'"
                          class="active"
                        ></span>
                        <i
                          v-if="icon.type === 'tv'"
                          class="fas fa-tv icon-tv"
                        ></i>
                        <img
                          v-if="icon.type === 'image'"
                          :src="icon.src"
                          :alt="icon.alt"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Betting Odds -->
                  <div
                    class="bet-nation-odd"
                    v-for="(odd, idx) in match.odds"
                    :key="idx"
                  >
                    <div class="back odd-box">
                      <span class="bet-odd"
                        ><b>{{ odd.back }}</b></span
                      >
                    </div>
                    <div class="lay odd-box">
                      <span class="bet-odd"
                        ><b>{{ odd.lay }}</b></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Render Another Component if No Data -->
          <div v-else>
            <!-- <div v-for="(live, index) in casino"></div> -->
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import casinolist from "../../utils/casinolist.json";
import gamelist from "../../utils/gamelist.json";
import exclusive from "../../utils/exclusive.json";
import gamesbar from "../../utils/gamesbar.json";
import { useRoute } from "vue-router";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppSidebar from "./Sidebar.vue";
import LiveCasinoList from "./LiveCasinoList.vue";
export default {
  name: "HeaderGameRender",
  components: {
    AppFooter,
    AppSidebar,
    AppHeader,
    LiveCasinoList,
  },
  data() {
    return {
      casinoItems: casinolist,
      tableOpacity: 1,
      matches: gamelist,
      latestEvents: exclusive,
      sportsTabs: gamesbar,
      route: "",
      filteredData: [],
      // Flag for no records found
      noRecordsFound: false,
      active: false,
      casinoData: [],
    };
  },
  created() {
    this.route = useRoute(); // Access route
    this.filter(); // Automatically populate data based on route
  },
  methods: {
    filter() {
      const route = useRoute();
      const gameRoute = route.params.routeParam;
      const gameName = route.params.name;
      var replacedName = gameName?.replace("-", " ").toLowerCase();

      console.log(gameRoute);
      console.log(replacedName);

      this.casinoData = this.casinoItems.filter(
        (data) => data.route === gameRoute
      );

      this.filteredData = this.matches.filter(
        (data) => data.game.toLowerCase() === replacedName
      )[0];
    },

    showRacingList(raceType) {
      if (raceType === "horseRacing") {
        this.overlayVisible = "horseRacing";
      } else {
        this.overlayVisible = "greyhoundRacing";
      }
      this.tableOpacity = 0.3;
    },
    closeOverlay() {
      this.overlayVisible = null;
      this.tableOpacity = 1;
    },
    setNavActiveTab(name) {
      // Loop through sportsTabs and set the active tab to true and others to false
      this.sportsTabs.forEach((item) => {
        item.active = item.name === name;
      });
    },
  },
};
</script>

<style scoped>
.casino-item-banner {
  background-color: #f8f9fa; /* Light background */
  padding: 10px;
  border-radius: 8px; /* Rounded edges */
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.casino-item-banner:hover {
  transform: scale(1.05); /* Subtle zoom effect on hover */
}

.casino-game p {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

/* Breakpoint: 1200px and up (Large Screens) */
@media (min-width: 1200px) {
  .bet-nation-game-name {
    white-space: nowrap;
  }
  .bet-nation-name {
    font-size: 16px;
  }
  .bet-nation-odd {
    font-size: 16px;
  }
}

/* Breakpoint: 992px - 1199px (Medium Screens) */
@media (max-width: 1199px) {
  .bet-nation-name {
    font-size: 15px;
  }
  .bet-nation-odd {
    font-size: 15px;
  }
}

/* Breakpoint: 768px - 991px (Tablets) */
@media (max-width: 991px) {
  .bet-table-row {
    justify-content: center;
  }
  .bet-nation-name {
    width: 60%;
    font-size: 14px;
  }
  .bet-nation-odd {
    width: 13%;
  }
}

/* Breakpoint: 576px - 767px (Small Tablets & Larger Phones) */
@media (max-width: 767px) {
  .bet-nation-name {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .bet-nation-odd {
    width: 30%; /* Three odds per row */
    margin-bottom: 5px;
    font-size: 12px;
  }
  .bet-nation-odd .odd-box {
    width: 100%; /* Full width for better touch interaction */
  }
}

/* Breakpoint: 375px - 575px (Small Phones) */
@media (max-width: 575px) {
  .bet-nation-name {
    font-size: 12px;
  }
  .bet-nation-odd {
    width: 30%; /* Each odd on its own row */
    font-size: 12px;
  }
  .bet-nation-odd .odd-box {
    text-align: center;
    font-size: 11px;
  }
}

/* Breakpoint: Below 375px (Extra Small Phones) */
@media (max-width: 374px) {
  .bet-nation-name {
    font-size: 11px;
  }
  .bet-nation-odd {
    font-size: 10px;
  }
  .bet-nation-odd .odd-box {
    padding: 0;
  }
}
</style>
