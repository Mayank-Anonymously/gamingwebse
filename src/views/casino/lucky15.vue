<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0 pad-left-0">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0 pad-right-0">
          <div class="center-main-container casino-page">
            <div class="center-container">
              <div class="casino-page-container ball-by-ball">
                <div class="casino-header">
                  <span class="casino-name"
                    >LUCKY 15<a class="ms-1"><small>Rules</small></a></span
                  ><span class="casino-rid d-none d-xl-inline-block"
                    ><small>Round ID: <span>7937308692422</span></small></span
                  >
                </div>
                <div class="casino-title-header-mobile d-xl-none">
                  <ul class="nav nav-tabs menu-tabs">
                    <li class="nav-item">
                      <div class="nav-link active">Game</div>
                    </li>
                    <li class="nav-item">
                      <div class="nav-link">Placed Bet (0)</div>
                    </li>
                  </ul>
                  <div class="pe-2">
                    <span class="casino-rid"
                      >Round ID: <span>7937308692422</span></span
                    >
                  </div>
                </div>
                <div class="">
                  <div class="casino-video">
                    <div class="video-box-container">
                      <div class="countdown">
                        <h1>{{ paddedTime }}</h1>
                      </div>
                    </div>
                  </div>
                  <div
                    class="casino-detail detail-page-container position-relative"
                  >
                    <div
                      class="game-market market-6 container-fluid container-fluid-5"
                    >
                      <div class="market-title row row5">Runs</div>
                      <div class="market-header row row5">
                        <div class="col-12 col-md-4 d-none d-md-block">
                          <div class="market-row">
                            <div class="market-nation-detail"></div>
                            <div class="market-odd-box back"><b>Back</b></div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4 d-none d-md-block">
                          <div class="market-row">
                            <div class="market-nation-detail"></div>
                            <div class="market-odd-box back"><b>Back</b></div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="market-row">
                            <div class="market-nation-detail"></div>
                            <div class="market-odd-box back"><b>Back</b></div>
                          </div>
                        </div>
                        <div class="fancy-min-max-box"></div>
                      </div>
                      <div class="market-body row row5">
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >0 Runs</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >1 Runs</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >2 Runs</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >4 Runs</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >6 Runs</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-4">
                          <div class="fancy-market" data-title="SUSPENDED">
                            <div class="market-row">
                              <div class="market-nation-detail">
                                <span class="market-nation-name pointer"
                                  >Wicket</span
                                >
                              </div>
                              <div class="blb-box suspended-box">
                                <div class="market-odd-box back">
                                  <span class="market-odd">-</span>
                                </div>
                              </div>
                              <div class="fancy-min-max-box">
                                <div class="fancy-min-max">
                                  <span class="w-100 d-block">Min: 50</span
                                  ><span class="w-100 d-block">Max: 25K</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="casino-last-result-title">
                      <span>Last Result</span
                      ><span
                        ><a href="/casino-results/lucky15">View All</a></span
                      >
                    </div>
                    <div class="casino-last-results">
                      <span class="result">6</span><span class="result">2</span
                      ><span class="result">2</span><span class="result">1</span
                      ><span class="result">6</span><span class="result">1</span
                      ><span class="result">1</span><span class="result">4</span
                      ><span class="result">0</span
                      ><span class="result">2</span>
                    </div>
                  </div>
                </div>
                <div class="d-none">
                  <div class="table-responsive w-100">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Matched Bet</th>
                          <th class="text-end">Odds</th>
                          <th class="text-end">Stake</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar right-sidebar casino-right-sidebar">
              <div class="sidebar-box my-bet-container">
                <div class="sidebar-title"><h4>My Bet</h4></div>
                <div class="my-bets">
                  <div class="table-responsive w-100">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Matched Bet</th>
                          <th class="text-end">Odds</th>
                          <th class="text-end">Stake</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../../components/AppHeader.vue";
import AppFooter from "../../components/AppFooter.vue";
import AppSidebar from "../../components/Sidebar.vue";

export default {
  name: "Lucky15Component",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
  data() {
    return {
      timeRemaining: 20, // Countdown starting time in seconds
    };
  },
  computed: {
    paddedTime() {
      // Ensure two digits by padding with a zero if below 10
      return String(this.timeRemaining).padStart(2, "0");
    },
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        if (this.timeRemaining <= 0) {
          clearInterval(interval);
          this.timeExpired();
          return;
        }

        this.timeRemaining--;
      }, 1000);
    },
    timeExpired() {
      console.log("Time's up!");
    },
  },
  mounted() {
    this.startCountdown();
  },
};
</script>
