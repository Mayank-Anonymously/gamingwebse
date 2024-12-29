<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0 pad-left-0 mobile-container">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Casino Results</h4>
            </div>
            <div class="card-body">
              <div class="report-form">
                <form class="row row5">
                  <div class="col-lg-2 col-md-3 col-5">
                    <div class="react-datepicker-wrapper">
                      <div class="react-datepicker__input-container">
                        <div class="mb-2 custom-datepicker">
                          <input
                            type="text"
                            class="form-control"
                            disabled=""
                            value="30/12/2024"
                          /><i class="far fa-calendar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-7">
                    <div class="mb-2 input-group position-relative">
                      <select class="form-select" name="type">
                        <option value="" disabled="">Select Casino Type</option>
                        <option value="teen">Teenpatti 1-day</option>
                        <option value="poker">Poker 1-Day</option>
                        <option value="3cardj">3 Cards Judgement</option>
                        <option value="aaa">Amar Akbar Anthony</option>
                        <option value="ab20">Andar Bahar</option>
                        <option value="abj">Andar Bahar 2</option>
                        <option value="baccarat">Baccarat</option>
                        <option value="baccarat2">Baccarat 2</option>
                        <option value="btable">Bollywood Casino</option>
                        <option value="card32">32 Cards A</option>
                        <option value="card32eu">32 Cards B</option>
                        <option value="cmatch20">Cricket Match 20-20</option>
                        <option value="cmeter">Casino Meter</option>
                        <option value="cricketv">Cricket V</option>
                        <option value="cricketv2">Cricket V2</option>
                        <option value="cricketv3">5Five Cricket</option>
                        <option value="dt20">20-20 Dragon Tiger</option>
                        <option value="dt202">20-20 Dragon Tiger 2</option>
                        <option value="dt6">1 Day Dragon Tiger</option>
                        <option value="dtl20">20-20 D T L</option>
                        <option value="lottcard">Lottery</option>
                        <option value="lucky7">Lucky 7 - A</option>
                        <option value="lucky7eu">Lucky 7 - B</option>
                        <option value="poker20">20-20 Poker</option>
                        <option value="poker6">Poker 6 Players</option>
                        <option value="teen20">20-20 Teenpatti</option>
                        <option value="teen8">Teenpatti Open</option>
                        <option value="teen9">Teenpatti Test</option>
                        <option value="war">Casino War</option>
                        <option value="worli">Worli Matka</option>
                        <option value="worli2">Instant Worli</option>
                        <option value="teen6">Teenpatti - 2.0</option>
                        <option value="queen">Queen</option>
                        <option value="race20">Race20</option>
                        <option value="lucky7eu2">Lucky 7 - C</option>
                        <option value="superover">Super Over</option>
                        <option value="trap">The Trap</option>
                        <option value="patti2">2 Cards Teenpatti</option>
                        <option value="teensin">29Card Baccarat</option>
                        <option value="teenmuf">Muflis Teenpatti</option>
                        <option value="race17">Race to 17</option>
                        <option value="teen20b">20-20 Teenpatti B</option>
                        <option value="trio">Trio</option>
                        <option value="notenum">Note Number</option>
                        <option value="teen2024">Teen 20 24</option>
                        <option value="kbc">K.B.C</option>
                        <option value="teen120">1 CARD 20-20</option>
                        <option value="teen1">1 CARD ONE-DAY</option>
                        <option value="vteen20">V-20-20 Teenpatti</option>
                        <option value="vteen">V-Teenpatti 1-day</option>
                        <option value="vdt6">V-1 Day Dragon Tiger</option>
                        <option value="vdt20">V-20-20 Dragon Tiger</option>
                        <option value="vlucky7">V-Lucky 7 - A</option>
                        <option value="vrace17">V-Race to 17</option>
                        <option value="vteenmuf">V-Muflis Teenpatti</option>
                        <option value="vaaa">V-Amar Akbar Anthony</option>
                        <option value="vbtable">V-Bollywood Casino</option>
                        <option value="vbaccarat">V-Baccarat</option>
                        <option value="vtrio">V-Trio</option>
                        <option value="vtrap">V-The Trap</option>
                        <option value="ab3">ANDAR BAHAR 50 CARDS</option>
                        <option value="vdtl20">V-20-20 D T L</option>
                        <option value="aaa2">Amar Akbar Anthony 2</option>
                        <option value="vivo">Vivo Gaming</option>
                        <option value="snakes-and-ladders">
                          snakes and ladders
                        </option>
                        <option value="roulette">roulette</option>
                        <option value="race2">Race to 2nd</option>
                        <option value="teen3">Instant Teenpatti</option>
                        <option value="ballbyball">Ball By Ball</option>
                        <option value="teen33">Instant Teenpatti 3.0</option>
                        <option value="sicbo2">Sic Bo 2</option>
                        <option value="teen41">Queen Top Open Teenpatti</option>
                        <option value="teen42">Jack Top Open Teenpatti</option>
                        <option value="lucky15">Lucky 15</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 d-grid">
                    <button type="submit" class="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                </form>
                <div class="row row10 mt-2 justify-content-between">
                  <div class="col-lg-2 col-6">
                    <div class="mb-2 input-group position-relative">
                      <span class="me-2">Show</span
                      ><select class="form-select">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option></select
                      ><span class="ms-2">Entries</span>
                    </div>
                  </div>
                  <div class="col-lg-2 col-6">
                    <div class="mb-2 input-group position-relative">
                      <span class="me-2">Search:</span
                      ><input
                        type="search"
                        class="form-control"
                        placeholder="0 records..."
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-2 table-responsive">
                  <table
                    role="table"
                    class="table table-bordered table-striped"
                  >
                    <thead>
                      <tr role="row">
                        <th colspan="1" role="columnheader" class="round-id">
                          Round ID
                        </th>
                        <th colspan="1" role="columnheader">Winner</th>
                      </tr>
                    </thead>
                    <tbody role="rowgroup"></tbody>
                  </table>
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
  name: "AccountStatement",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
};
</script>
