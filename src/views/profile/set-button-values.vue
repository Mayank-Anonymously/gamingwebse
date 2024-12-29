<template>
  <div>
    <AppHeader />
    <div class="container-fluid mx-0 my0 pad-left-0 ">
      <div class="row">
        <div class="col-md-2">
          <AppSidebar />
        </div>
        <div class="col-md-10 pad-left-0">
          <div
            v-if="isModalVisible"
            class="modal fade show"
            tabindex="-1"
            style="display: block; padding-right: 17px"
            aria-labelledby="modalTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-md">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalTitle">Set Button Value</h5>
                  <button
                    type="button"
                    class="btn-close"
                    @click="closeModal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="game-buttons-tab"
                        data-bs-toggle="pill"
                        href="#game-buttons"
                        role="tab"
                        aria-controls="game-buttons"
                        aria-selected="true"
                      >
                        Game Buttons
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="casino-buttons-tab"
                        data-bs-toggle="pill"
                        href="#casino-buttons"
                        role="tab"
                        aria-controls="casino-buttons"
                        aria-selected="false"
                      >
                        Casino Buttons
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="game-buttons"
                      role="tabpanel"
                    >
                      <!-- Game Buttons Form -->
                      <form @submit.prevent="submitForm('game')">
                        <div class="row">
                          <div class="col-6">
                            <label class="form-label"
                              ><b>Price Label:</b></label
                            >
                          </div>
                          <div class="col-6">
                            <label class="form-label"
                              ><b>Price Value:</b></label
                            >
                          </div>
                        </div>
                        <div
                          v-for="(button, index) in gameButtons"
                          :key="index"
                          class="row mb-3"
                        >
                          <div class="col-6">
                            <input
                              v-model="button.btxt"
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <div class="col-6">
                            <input
                              v-model="button.bval"
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <input
                            v-model="button.bid"
                            type="hidden"
                            class="form-control"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                          Update
                        </button>
                      </form>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="casino-buttons"
                      role="tabpanel"
                    >
                      <!-- Casino Buttons Form -->
                      <form @submit.prevent="submitForm('casino')">
                        <!-- Same form structure for Casino buttons -->
                        <!-- Example -->
                        <div class="row">
                          <div class="col-6">
                            <label class="form-label"
                              ><b>Price Label:</b></label
                            >
                          </div>
                          <div class="col-6">
                            <label class="form-label"
                              ><b>Price Value:</b></label
                            >
                          </div>
                        </div>
                        <div
                          v-for="(button, index) in casinoButtons"
                          :key="index"
                          class="row mb-3"
                        >
                          <div class="col-6">
                            <input
                              v-model="button.btxt"
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <div class="col-6">
                            <input
                              v-model="button.bval"
                              type="text"
                              class="form-control"
                            />
                          </div>
                          <input
                            v-model="button.bid"
                            type="hidden"
                            class="form-control"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">
                          Update
                        </button>
                      </form>
                    </div>
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
  name: "SetButtonValues",
  components: {
    AppHeader,
    AppSidebar,
    AppFooter,
  },
};
</script>
