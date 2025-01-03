<template>
  <section class="header">
    <div class="header-top">
      <div class="logo-header">
        <a class="d-xl-none" href="/home"><i class="fas fa-home me-1"></i></a
        ><a href="/home"
          ><img
            src="https://sitethemedata.com/sitethemes/allpanelexch.com/front/logo.png"
        /></a>
      </div>
      <div class="user-details">
        <div class="search-box-container d-none d-xl-block">
          <div class="search-box">
            <input
              type="search"
              placeholder="Search here"
              class="form-control"
              value=""
            /><a><i class="fas fa-search-plus"></i></a>
          </div>
        </div>
        <div class="header-rules ms-3">
          <div>
            <a class="rules-link pointer"><b>Rules</b></a>
          </div>
        </div>
        <div class="user-balance ms-1 ms-xl-3">
          <div><span>Balance:</span><b>1500</b></div>
          <div>
            <span>Exp:</span><b class="pointer">0</b>
            <div class="dropdown">
              <a
                @click="toggleDropdown"
                class="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
              >
                Demo <i class="fas fa-chevron-down ms-1"></i>
              </a>
              <ul
                v-if="isDropdownOpen"
                class="dropdown-menu show"
                x-placement="bottom-end"
              >
                <a href="/profile/accountstatment">
                  <li class="dropdown-item">Account Statement</li>
                </a>
                <a href="/profile/current-bet">
                  <li class="dropdown-item">Current Bet</li>
                </a>
                <a href="/profile/casino-results">
                  <li class="dropdown-item">Casino Results</li>
                </a>
                <a href="/profile/set-button-values">
                  <li class="dropdown-item">Set Button Values</li>
                </a>
                <a class="d-xl-none">
                  <li class="dropdown-item">Rules</li>
                </a>
                <a class="dropdown-item d-xl-none">
                  Balance
                  <div class="form-check float-end">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    />
                  </div>
                </a>
                <a class="dropdown-item d-xl-none">
                  Exposure
                  <div class="form-check float-end">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    />
                  </div>
                </a>
                <hr class="dropdown-divider" role="separator" />
                <li class="dropdown-item">SignOut</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <a
            @click="toggleDropdown"
            class="user-name ms-3 d-none d-xl-block dropdown-toggle"
            id="react-aria8131644381-6"
            aria-expanded="false"
            >Demo<i class="fas fa-chevron-down ms-1"></i
          ></a>
        </div>
      </div>
      <div class="search-box-container d-xl-none">
        <div class="search-box">
          <input
            type="search"
            placeholder="Search here"
            class="form-control"
            value=""
          /><a><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="news">
          <marquee scrollamount="3"></marquee>
        </div>
        <div class="depowith"></div>
      </div>
    </div>
    <div class="header-bottom d-xl-block">
      <nav class="navbar navbar-expand">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sports-book/33"
              >Lottery</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/cricket/all-sports"
              >Cricket</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/tennis/all-sports"
              >Tennis</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/football/all-sports"
              >Football</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/table-tennis/all-sports"
              >Table Tennis</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/name/22"
              >Baccarat</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/name/24"
              >32 Cards</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/name/20"
              >Teenpatti</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/name/21"
              >Poker</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/games/name/27"
              >Lucky 7</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isDropdownOpen: false, // Controls the visibility of the dropdown
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
