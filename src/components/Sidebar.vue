<template>
  <div class="sidebar left-sidebar">
    <!-- Racing Sports Accordion -->
    <div class="accordion">
      <div class="accordion-item">
        <h2 class="sidebar-title accordion-header">
          <button
            type="button"
            class="accordion-button"
            @click="toggleAccordion('racingSports')"
          >
            Racing Sports
          </button>
        </h2>
        <div
          :class="{ collapse: !isAccordionOpen('racingSports') }"
          class="accordion-collapse"
        >
          <div class="racing-sport accordion-body">
            <ul>
              <li class="nav-item">
                <a
                  id="horse-dropdown"
                  role="button"
                  class="nav-link"
                  @click="openOverlay('horse')"
                  tabindex="0"
                  href="#"
                  >Horse Racing</a
                >
              </li>
            </ul>
            <ul>
              <li class="nav-item">
                <a
                  id="greyhound-dropdown"
                  role="button"
                  class="nav-link"
                  @click="openOverlay('greyhound')"
                  tabindex="0"
                  href="#"
                  >Greyhound Racing</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Overlay Section -->
      <div v-if="showOverlay" class="overlay">
        <div class="overlay-content">
          <h2 v-if="activeOverlay === 'horse'">All Horse Racing</h2>
          <h2 v-if="activeOverlay === 'greyhound'">All Greyhound Racing</h2>
          <ul v-if="activeOverlay === 'horse'">
            <li v-for="(race, index) in horseRaces" :key="index">{{ race }}</li>
          </ul>
          <ul v-if="activeOverlay === 'greyhound'">
            <li v-for="(race, index) in greyhoundRaces" :key="index">
              {{ race }}
            </li>
          </ul>
          <button @click="closeOverlay">Close</button>
        </div>
      </div>
    </div>

    <!-- Others Accordion -->
    <div class="accordion" id="sidebarAccordion">
      <div class="accordion-item">
        <h2 class="sidebar-title accordion-header">
          <button
            type="button"
            class="accordion-button"
            @click="toggleAccordion('others')"
          >
            Others
          </button>
        </h2>
        <div
          :class="{ collapse: !isAccordionOpen('others') }"
          class="accordion-collapse"
        >
          <div class="other-casino-list accordion-body">
            <ul>
              <li class="nav-item" v-for="(item, index) in others" :key="index">
                <a :class="['nav-link', item.class]" :href="item.url">
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- All Sports Accordion -->
    <div class="accordion">
      <div class="accordion-item">
        <h2 class="sidebar-title accordion-header">
          <button
            type="button"
            class="accordion-button"
            @click="toggleAccordion('allSports')"
          >
            All Sports
          </button>
        </h2>
        <div
          :class="{ collapse: !isAccordionOpen('allSports') }"
          class="accordion-collapse"
        >
          <div class="menu-box accordion-body">
            <ul class="navbar-nav">
              <!-- Dynamic Rendering of Sports Categories -->
              <li
                class="nav-item dropdown"
                v-for="(category, categoryIndex) in accordionData"
                :key="'category-' + categoryIndex"
              >
                <a class="dropdown-toggle nav-link">
                  <i :class="category.icon + ' me-1'"></i>
                  <span>{{ category.name }}</span>
                </a>
                <ul class="dropdown-menu">
                  <!-- Dynamic Rendering of Subcategories -->
                  <li
                    class="nav-item dropdown"
                    v-for="(subCategory, subIndex) in category.subcategories"
                    :key="'subcategory-' + categoryIndex + '-' + subIndex"
                  >
                    <a class="dropdown-toggle nav-link">
                      <i class="far fa-plus-square me-1"></i>
                      <span>{{ subCategory.name }}</span>
                    </a>
                    <ul class="dropdown-menu">
                      <!-- Dynamic Rendering of Links within Subcategories -->
                      <li
                        class="nav-item"
                        v-for="(link, linkIndex) in subCategory.links"
                        :key="
                          'link-' +
                          categoryIndex +
                          '-' +
                          subIndex +
                          '-' +
                          linkIndex
                        "
                      >
                        <a class="nav-link" :href="link.link" target="_blank">
                          <span>{{ link.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebarallsports from "../../utils/sidebarallsports.json";
import sidebarothers from "../../utils/sidebarothers.json";

export default {
  name: "AppSidebar",
  data() {
    return {
      showOverlay: false,
      activeOverlay: null,
      accordionData: sidebarallsports,
      others: sidebarothers,
      openAccordions: {
        racingSports: true,
        others: true,
        allSports: true,
      },
      horseRaces: ["Race 1", "Race 2", "Race 3"], // Example data for Horse Racing
      greyhoundRaces: ["Race A", "Race B", "Race C"], // Example data for Greyhound Racing
    };
  },
  methods: {
    openOverlay(type) {
      this.activeOverlay = type;
      this.showOverlay = true;
    },
    closeOverlay() {
      this.showOverlay = false;
      this.activeOverlay = null;
    },
    toggleAccordion(name) {
      this.$set(this.openAccordions, name, !this.openAccordions[name]);
    },
    isAccordionOpen(name) {
      return this.openAccordions[name] || false;
    },
  },
};
</script>

<style scoped>
/* Optional: Add custom styles for the sidebar */
</style>
