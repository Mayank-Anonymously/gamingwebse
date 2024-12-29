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
              <h4 class="card-title">Current Bets</h4>
            </div>
            <div class="card-body">
              <div class="report-form">
                <form class="row row5">
                  <div class="col-lg-2 col-md-3">
                    <div class="mb-2 input-group position-relative">
                      <select class="form-select" name="gtype">
                        <option value="" disabled="">Select Report Type</option>
                        <option value="1">Sports</option>
                        <option value="2">Casino</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-2 d-grid">
                    <button type="submit" class="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                </form>
                <div
                  class="row row5 mt-2 justify-content-between align-items-center"
                >
                  <div class="col-lg-2 col-5">
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
                  <div class="col-lg-4 col-md-6 col-7 text-center">
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="all"
                        name="filter"
                        value="all"
                        checked=""
                      />All<label class="form-check-label" for="all"></label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="back"
                        name="filter"
                        value="all"
                      />Back<label class="form-check-label" for="back"></label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="lay"
                        name="filter"
                        value="all"
                      />Lay<label class="form-check-label" for="lay"></label>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 text-left col-7">
                    <div>
                      Total Bets: <span class="me-2">0</span> Total Amount:
                      <span class="me-2">0</span>
                    </div>
                  </div>
                  <div class="col-lg-2 col-5">
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
                        <th colspan="1" role="columnheader">Event Name</th>
                        <th colspan="1" role="columnheader">Nation</th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-amount text-end"
                        >
                          User Rate
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-amount text-end"
                        >
                          Amount
                        </th>
                        <th colspan="1" role="columnheader" class="report-date">
                          Place Date
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-action"
                        >
                          <div class="text-end">
                            <div class="form-check form-check-inline">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                title="Toggle All Current Page Rows Selected"
                                style="cursor: pointer"
                              />
                            </div>
                          </div>
                        </th>
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
