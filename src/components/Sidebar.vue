<template>
  <div class="sidebar left-sidebar">
    <div class="accordion">
      <!-- Outer Accordion for Racing Sports -->
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
                  href="#"
                  >Greyhound Racing</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Overlay for Horse and Greyhound -->
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

    <!-- Outer Accordion for Others -->
    <div class="accordion">
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

    <!-- Accordion for All Sports -->
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
    <div class="menu-box accordion-body accordion">
      <ul class="navbar-nav accordion-item">
        <li
          class="nav-item dropdown"
          v-for="(category, categoryIndex) in accordionData"
          :key="'category-' + categoryIndex"
        >
          <a
            class="dropdown-toggle nav-link"
            @click.prevent="toggleCategoryAccordion(categoryIndex)"
          >
            <i :class="category.icon + ' me-1'"></i>
            <span>{{ category.name }}</span>
          </a>
          <ul
            v-bind:class="{ show: isCategoryOpen(categoryIndex) }"
            class="dropdown-menu"
          >
            <li
              class="nav-item dropdown"
              v-for="(subCategory, subIndex) in category.subcategories"
              :key="'subcategory-' + categoryIndex + '-' + subIndex"
            >
              <a
                class="dropdown-toggle nav-link"
                @click.prevent="toggleCatAccordion(categoryIndex, subIndex)"
              >
                <i class="far fa-plus-square me-1"></i>
                <span>{{ subCategory.name }}</span>
              </a>
              <ul
                v-bind:class="{ show: isCatAccordionOpen(categoryIndex, subIndex) }"
                class="dropdown-menu"
              >
                <li
                  class="nav-item"
                  v-for="(link, linkIndex) in subCategory.links"
                  :key="'link-' + categoryIndex + '-' + subIndex + '-' + linkIndex"
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
      openCatAccordions: {}, // State for nested accordions
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
      this.openAccordions[name] = !this.openAccordions[name];
    },
    isAccordionOpen(name) {
      return this.openAccordions[name] || false;
    },
    toggleCategoryAccordion(categoryIndex) {
      // Directly toggle the visibility of the category accordion
      this.openAccordions[`category-${categoryIndex}`] =
        !this.isCategoryOpen(categoryIndex);
    },
    isCategoryOpen(categoryIndex) {
      // Check if the category accordion is open
      return this.openAccordions[`category-${categoryIndex}`] || false;
    },
    toggleCatAccordion(categoryIndex, subIndex) {
      const key = `${categoryIndex}-${subIndex}`;
      this.openCatAccordions[key] = !this.openCatAccordions[key];
    },
    isCatAccordionOpen(categoryIndex, subIndex) {
      const key = `${categoryIndex}-${subIndex}`;
      return this.openCatAccordions[key] || false;
    },
  },
};
</script>

<style scoped></style>

<!-- <template>
  <div id="app">
    <div class="accordion" id="accordionExample">
      <div
        v-for="(category, index) in data"
        :key="index"
        class="accordion-item"
      >
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index"
            aria-expanded="true"
            :aria-controls="'collapse' + index"
          >
            <i :class="category.icon"></i> {{ category.name }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div
              v-for="(subcategory, subIndex) in category.subcategories"
              :key="subIndex"
            >
              <p>
                <strong>{{ subcategory.name }}</strong>
              </p>
              <div v-if="subcategory.links">
                <ul>
                  <li
                    v-for="(link, linkIndex) in subcategory.links"
                    :key="linkIndex"
                  >
                    <a :href="link.link" target="_blank">{{ link.name }}</a>
                  </li>
                </ul>
              </div>
              <div v-else>
                <a :href="subcategory.link" target="_blank">{{
                  subcategory.name
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
