<template>
  <div class="casino-list-images">
    <div class="live-casino-list">
      <ul class="nav-pills">
        <li
          class="nav-item"
          v-for="(live, index) in livecasinolist"
          :key="index"
        >
          <span
            @click="setActive(live.name)"
            :class="[
              'nav-link',
              selectedOption === live.name ? 'nav-link-active' : '',
            ]"
          >
            {{ live.name }}
          </span>
        </li>
      </ul>
    </div>

    <!-- Tabs for subCasinoGames -->
    <div v-if="filteredData.length" class="filtered-content">
      <div class="tabs">
        <span
          v-for="(casino, index) in filteredData[0].subCasinoGames"
          :key="index"
          class="tab"
          @click="setActiveTab(casino.name)"
          :class="{ active: activeTab === casino.name }"
        >
          {{ casino.name }}
        </span>
      </div>
      <!-- Images for active tab -->
      <div v-if="activeTab" class="image-container">
        <div
          v-for="(game, index) in getActiveCasinoGames"
          :key="index"
          class="image-box"
          :style="{ backgroundImage: `url(${game.image})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import livecasinolist from "../../../utils/sidebarjson/others/livecasinojson.json";

export default {
  name: "LiveCasinoList",
  data() {
    return {
      selectedOption: "", // Tracks the active main category
      livecasinolist: livecasinolist,
      filteredData: [], // Stores the filtered data based on the selected category
      activeTab: "", // Tracks the active sub-category
    };
  },
  methods: {
    setActive(name) {
      this.selectedOption = name;
      this.filteredData = this.livecasinolist.filter(
        (data) => data.name === name
      );
      this.activeTab = this.filteredData[0]?.subCasinoGames?.[0]?.name || ""; // Default to the first casino tab
    },
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
  computed: {
    getActiveCasinoGames() {
      if (!this.filteredData.length || !this.activeTab) return [];
      const activeCasino = this.filteredData[0].subCasinoGames.find(
        (casino) => casino.name === this.activeTab
      );
      return activeCasino?.games || [];
    },
  },
  mounted() {
    // Set the first item as active by default
    if (this.livecasinolist.length > 0) {
      const firstItem = this.livecasinolist[0];
      this.setActive(firstItem.name); // Trigger default selection logic
    }
  },
};
</script>

<style>
.filtered-content {
  width: 100%;
  margin-left: 10px;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  background: #0088cca5;
  width: 100%;
}

.tab {
  cursor: pointer;
  color: white;
  padding: 6px;
  background-color: #5ab2de;
}

.tab.active {
  background-color: #007bff;
  color: white;
}

.image-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.image-box {
  width: calc(16.66% - 10px);
  height: 80px;
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
}
</style>
