<template>
  <div class="container-custom">
    <!-- Blinkers -->
    <div class="latest-event d-none d-xl-flex">
      <div
        v-for="(event, index) in latestEvents"
        :key="index"
        class="latest-event-item"
      >
        <a :href="event.link" class="blink_me">
          <i :class="['d-icon', 'me-1', event.icon]"></i>
          <span>{{ event.name }}</span>
        </a>
      </div>
    </div>

    <!-- top tab games -->
    <ul class="nav nav-pills sports-tab">
      <li v-for="(item, index) in sportsTabs" :key="index" class="nav-item">
        <a :class="['nav-link', item.active ? 'active' : '']" :href="item.link">
          <div class="d-xl-none">
            <i :class="['icon', item.icon]"></i>
          </div>
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
    <!-- top tab games -->

    <!-- TABLE -->
    <div class="tab-content mt-1">
      <div class="tab-pane active">
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
              v-for="(match, index) in matches"
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
                    <span v-if="icon.type === 'active'" class="active"></span>
                    <i v-if="icon.type === 'tv'" class="fas fa-tv icon-tv"></i>
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
    </div>

    <!-- TABLE -->

    <!-- Games List -->

    <div class="row mt-2">
      <div
        v-for="(casino, index) in casinoItems"
        :key="index"
        class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3"
      >
        <a :href="casino.link" class="text-decoration-none">
          <div class="casino-item-banner">
            <img
              :src="casino.image"
              class="img-fluid w-100 rounded"
              alt="Casino Image"
            />
            <div class="casino-game text-center mt-2">
              <p class="mb-0">{{ casino.name }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Games List -->
  </div>
</template>

<script>
import casinolist from "../../utils/casinolist.json";
import gamelist from "../../utils/gamelist.json";
import exclusive from "../../utils/exclusive.json";
import gamesbar from "../../utils/gamesbar.json";
export default {
  data() {
    return {
      casinoItems: casinolist,
      tableOpacity: 1,
      matches: gamelist,
      latestEvents: exclusive,
      sportsTabs: gamesbar,
    };
  },
  methods: {
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
