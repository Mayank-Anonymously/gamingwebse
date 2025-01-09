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
                    >Teenpatti 1-day<a class="ms-1"
                      ><small>Rules</small></a
                    ></span
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
                  <div class="casino-detail">
                    <div class="casino-table">
                      <div class="casino-table-box">
                        <div class="casino-table-left-box">
                          <div class="casino-table-header">
                            <div class="casino-nation-detail">Player A</div>
                            <div class="casino-odds-box back">Back</div>
                            <div class="casino-odds-box lay">Lay</div>
                          </div>
                          <div class="casino-table-body">
                            <div class="casino-table-row">
                              <div class="casino-nation-detail">
                                <div class="casino-nation-name">Main</div>
                              </div>
                              <div class="casino-odds-box back">
                                <span class="casino-odds">1.98</span>
                              </div>
                              <div class="casino-odds-box lay">
                                <span class="casino-odds">0</span>
                              </div>
                            </div>
                            <div class="casino-table-row">
                              <div class="casino-nation-detail">
                                <div class="casino-nation-name">
                                  Consecutive
                                </div>
                              </div>
                              <div class="casino-odds-box back">
                                <span class="casino-odds">2.43</span>
                              </div>
                              <div class="casino-odds-box lay">
                                <span class="casino-odds">2.53</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="casino-table-box-divider"></div>
                        <div class="casino-table-right-box">
                          <div class="casino-table-header">
                            <div class="casino-nation-detail">Player B</div>
                            <div class="casino-odds-box back">Back</div>
                            <div class="casino-odds-box lay">Lay</div>
                          </div>
                          <div class="casino-table-body">
                            <div class="casino-table-row">
                              <div class="casino-nation-detail">
                                <div class="casino-nation-name">Main</div>
                              </div>
                              <div class="casino-odds-box back">
                                <span class="casino-odds">1.98</span>
                              </div>
                              <div class="casino-odds-box lay">
                                <span class="casino-odds">0</span>
                              </div>
                            </div>
                            <div class="casino-table-row">
                              <div class="casino-nation-detail">
                                <div class="casino-nation-name">
                                  Consecutive
                                </div>
                              </div>
                              <div class="casino-odds-box back">
                                <span class="casino-odds">2.43</span>
                              </div>
                              <div class="casino-odds-box lay">
                                <span class="casino-odds">2.53</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="casino-table-full-box teenpatti1day-other-odds mt-3"
                      >
                        <div class="casino-table-header">
                          <div class="casino-nation-detail"></div>
                          <div class="casino-odds-box">Card 1</div>
                          <div class="casino-odds-box">Card 2</div>
                          <div class="casino-odds-box">Card 3</div>
                          <div class="casino-odds-box">Card 4</div>
                          <div class="casino-odds-box">Card 5</div>
                          <div class="casino-odds-box">Card 6</div>
                        </div>
                        <div class="casino-table-body">
                          <div class="casino-table-row">
                            <div class="casino-nation-detail">
                              <div class="casino-nation-name">Odd</div>
                            </div>
                            <div class="casino-odds-box back">
                              <span class="casino-odds">1.83</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                          </div>
                          <div class="casino-table-row">
                            <div class="casino-nation-detail">
                              <div class="casino-nation-name">Even</div>
                            </div>
                            <div class="casino-odds-box back">
                              <span class="casino-odds">2.13</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <span class="casino-odds">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="casino-last-result-title">
                      <span>Last Result</span
                      ><span><a href="/casino-results/teen">View All</a></span>
                    </div>
                    <div class="casino-last-results">
                      <span class="result result-a">A</span
                      ><span class="result result-b">B</span
                      ><span class="result result-b">B</span
                      ><span class="result result-a">A</span
                      ><span class="result result-b">B</span
                      ><span class="result result-b">B</span
                      ><span class="result result-a">A</span
                      ><span class="result result-b">B</span
                      ><span class="result result-b">B</span
                      ><span class="result result-b">B</span>
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
  name: "TeenComponent",
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
