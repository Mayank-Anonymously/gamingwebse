<template>
  <div class="main-container">
    <div class="center-main-container home-page">
      <div class="center-container">
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
        
        <ul class="nav nav-pills sports-tab">
          <li v-for="(item, index) in sportsTabs" :key="index" class="nav-item">
            <a
              :class="['nav-link', item.active ? 'active' : '']"
              :href="item.link"
            >
              <div class="d-xl-none">
                <i :class="['icon', item.icon]"></i>
              </div>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
        <div class="tab-content mt-1">
          <div class="tab-pane active">
            <div class="bet-table">
              <div class="bet-table-header">
                <div class="bet-nation-name"><b>Game</b></div>
                <div class="bet-nation-odd"><b>1</b></div>
                <div class="bet-nation-odd"><b>X</b></div>
                <div class="bet-nation-odd"><b>2</b></div>
              </div>
              <div class="bet-table-body">
                <div
                  class="bet-table-row"
                  v-for="(match, index) in matches"
                  :key="index"
                >
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
        <div class="casino-list mt-2">
          <div
            v-for="(casino, index) in casinoItems"
            :key="index"
            class="casino-list-item"
          >
            <a :href="casino.link">
              <div
                class="casino-list-item-banner"
                :style="{
                  backgroundImage: `url('${casino.image}'), url('https://dataobj.ecoassetsservice.com/casino-icons/default.jpg')`,
                }"
              ></div>
              <div class="casino-list-name">{{ casino.name }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
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
/* Add your CSS here from the original HTML */
</style>
