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
                    >Ball By Ball<a class="ms-1"><small>Rules</small></a></span
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
                          </div>
                          <div class="casino-table-body">
                            <div class="casino-table-row">
                              <div class="casino-odds-box">Player A</div>
                              <div class="casino-odds-box">3 Baccarat A</div>
                              <div class="casino-odds-box">Total A</div>
                              <div class="casino-odds-box">Pair Plus A</div>
                            </div>
                            <div class="casino-table-row">
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
                                <span class="casino-odds">A</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="teenpatti20-other-oods d-md-none">
                          <div class="casino-table-left-box">
                            <div class="casino-odds-box back suspended-box">
                              <div>
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/spade.png"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/club.png"
                                />
                              </div>
                              <div><span class="casino-odds">0</span></div>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <div>
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/heart.png"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/diamond.png"
                                />
                              </div>
                              <div><span class="casino-odds">0</span></div>
                            </div>
                          </div>
                        </div>
                        <div class="casino-table-right-box">
                          <div class="casino-table-header">
                            <div class="casino-nation-detail">Player B</div>
                          </div>
                          <div class="casino-table-body">
                            <div class="casino-table-row">
                              <div class="casino-odds-box">Player B</div>
                              <div class="casino-odds-box">3 Baccarat B</div>
                              <div class="casino-odds-box">Total B</div>
                              <div class="casino-odds-box">Pair Plus B</div>
                            </div>
                            <div class="casino-table-row">
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
                                <span class="casino-odds">B</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="teenpatti20-other-oods d-md-none">
                          <div class="casino-table-right-box">
                            <div class="casino-odds-box back suspended-box">
                              <div>
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/spade.png"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/club.png"
                                />
                              </div>
                              <div><span class="casino-odds">0</span></div>
                            </div>
                            <div class="casino-odds-box back suspended-box">
                              <div>
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/heart.png"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/diamond.png"
                                />
                              </div>
                              <div><span class="casino-odds">0</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="teenpatti20-other-oods d-none d-md-flex">
                        <div class="casino-table-left-box">
                          <div class="casino-odds-box back suspended-box">
                            <div>
                              <img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/spade.png"
                              /><img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/club.png"
                              />
                            </div>
                            <div><span class="casino-odds">0</span></div>
                          </div>
                          <div class="casino-odds-box back suspended-box">
                            <div>
                              <img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/heart.png"
                              /><img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/diamond.png"
                              />
                            </div>
                            <div><span class="casino-odds">0</span></div>
                          </div>
                        </div>
                        <div class="casino-table-right-box">
                          <div class="casino-odds-box back suspended-box">
                            <div>
                              <img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/spade.png"
                              /><img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/club.png"
                              />
                            </div>
                            <div><span class="casino-odds">0</span></div>
                          </div>
                          <div class="casino-odds-box back suspended-box">
                            <div>
                              <img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/heart.png"
                              /><img
                                src="https://versionobj.ecoassetsservice.com/v28/static/front/img/icons/diamond.png"
                              />
                            </div>
                            <div><span class="casino-odds">0</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="casino-last-result-title">
                      <span>Last Result</span
                      ><span
                        ><a href="/casino-results/teen20c">View All</a></span
                      >
                    </div>
                    <div class="casino-last-results">
                      <span class="result result-a">A</span
                      ><span class="result result-a">A</span
                      ><span class="result result-a">A</span
                      ><span class="result result-a">A</span
                      ><span class="result result-a">A</span
                      ><span class="result result-b">B</span
                      ><span class="result result-a">A</span
                      ><span class="result result-a">A</span
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
  name: "Btable2GameComponent",
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
