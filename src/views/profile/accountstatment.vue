<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0 pad-left-0 ">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Account Statement</h4>
            </div>
            <div class="card-body">
              <div class="report-form">
                <form class="row row5">
                  <div class="col-lg-2 col-md-3 col-6">
                    <div class="react-datepicker-wrapper">
                      <div class="react-datepicker__input-container">
                        <div class="mb-2 custom-datepicker">
                          <input
                            type="text"
                            class="form-control"
                            disabled=""
                            value="23/12/2024"
                          /><i class="far fa-calendar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-md-3 col-6">
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
                  <div class="col-lg-3 col-md-4">
                    <div class="mb-2 input-group position-relative">
                      <select class="form-select" name="type">
                        <option value="" disabled="">Select Report Type</option>
                        <option value="1">Deposite/Withdraw Reports</option>
                        <option value="2">Sport Report</option>
                        <option value="3">Casino Reports</option>
                        <option value="4">Third-Party Casino Reports</option>
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
                        <th colspan="1" role="columnheader" class="report-date">
                          Date
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-sr text-end"
                        >
                          Sr no
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-amount text-end"
                        >
                          Credit
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-amount text-end"
                        >
                          Debit
                        </th>
                        <th
                          colspan="1"
                          role="columnheader"
                          class="report-amount text-end"
                        >
                          Pts
                        </th>
                        <th colspan="1" role="columnheader">Remark</th>
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
