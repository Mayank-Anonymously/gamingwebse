<template>
  <div class="container-fluid">
    <div class="">
      <div class="col-xl-2 d-none d-xl-flex">
        <ul
          class="nav nav-pills casino-sub-tab"
          v-for="(casino, index) in casinoItems"
          :key="index"
        >
          <li class="nav-item">
            <a class="nav-link" :href="casino.route"
              ><span>{{ casino.name }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import casinolist from "../../utils/casinolist.json";

export default {
  data() {
    return {
      casinoItems: casinolist,
    };
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
