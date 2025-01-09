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
                    >SIC BO 2<a class="ms-1"><small>Rules</small></a></span
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
                      <div class="d-none d-xl-block">
                        <div class="sicbo-top">
                          <div class="sicbo-top-box sicbo-title-box">
                            1:1 Lose to Any Triple
                          </div>
                          <div class="sicbo-top-box sicbo-title-box">30:1</div>
                          <div class="sicbo-top-box sicbo-title-box">
                            1:1 Lose to Any Triple
                          </div>
                        </div>
                        <div class="sicbo-middle">
                          <div
                            class="sicbo-middle-small sicbo-square-box suspended-box"
                          >
                            <div>Small</div>
                            <div class="sicbo-box-value">4-10</div>
                          </div>
                          <div class="sicbo-middle-midle">
                            <div class="sicbo-middle-top-row">
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>ODD</div>
                                <div class="sicbo-box-value">1:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>4</div>
                                <div class="sicbo-box-value">50:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>5</div>
                                <div class="sicbo-box-value">20:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>6</div>
                                <div class="sicbo-box-value">15:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>7</div>
                                <div class="sicbo-box-value">12:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>8</div>
                                <div class="sicbo-box-value">8:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>9</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>10</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Any Triple</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>11</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>12</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>13</div>
                                <div class="sicbo-box-value">8:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>14</div>
                                <div class="sicbo-box-value">12:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>15</div>
                                <div class="sicbo-box-value">15:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>16</div>
                                <div class="sicbo-box-value">20:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>17</div>
                                <div class="sicbo-box-value">50:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Even</div>
                                <div class="sicbo-box-value">1:1</div>
                              </div>
                            </div>
                            <div class="sicbo-middle-middle-row">
                              <div class="sicbo-cube-box-container">
                                <div class="sicbo-top-box sicbo-title-box">
                                  <span>1:1 on Sinlge</span
                                  ><span>2:1 on Double</span
                                  ><span>3:1 on Tripple</span>
                                </div>
                                <div class="sicbo-cube-box-group">
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="sicbo-cube-box-container">
                                <div class="sicbo-top-box sicbo-title-box">
                                  8:1 Double
                                </div>
                                <div class="sicbo-cube-box-group">
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="sicbo-cube-box-container">
                                <div class="sicbo-top-box sicbo-title-box">
                                  150:1 Each Tripple
                                </div>
                                <div class="sicbo-cube-box-group">
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="sicbo-middle-big sicbo-square-box suspended-box"
                          >
                            <div>Big</div>
                            <div class="sicbo-box-value">11-17</div>
                          </div>
                        </div>
                        <div class="sicbo-bottom">
                          <div class="sicbo-cube-box-container">
                            <div class="sicbo-top-box sicbo-title-box">
                              5:1 Two Dice
                            </div>
                            <div class="sicbo-cube-box-group">
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                  alt="Dice 1"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                  alt="Dice 2"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                  alt="Dice 1"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                  alt="Dice 3"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                  alt="Dice 1"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                  alt="Dice 4"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                  alt="Dice 1"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                  alt="Dice 5"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                  alt="Dice 1"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                  alt="Dice 6"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                  alt="Dice 2"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                  alt="Dice 3"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                  alt="Dice 2"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                  alt="Dice 4"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                  alt="Dice 2"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                  alt="Dice 5"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                  alt="Dice 2"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                  alt="Dice 6"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                  alt="Dice 3"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                  alt="Dice 4"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                  alt="Dice 3"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                  alt="Dice 5"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                  alt="Dice 3"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                  alt="Dice 6"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                  alt="Dice 4"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                  alt="Dice 5"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                  alt="Dice 4"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                  alt="Dice 6"
                                />
                              </div>
                              <div
                                class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                              >
                                <img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                  alt="Dice 5"
                                /><img
                                  src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                  alt="Dice 6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-xl-none w-100">
                        <div class="sicbo-top">
                          <div class="sicbo-cube-box-container">
                            <div class="sicbo-top-box sicbo-title-box">
                              1:1 Lose to Any Triple
                            </div>
                            <div class="sicbo-cube-box-group">
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Small</div>
                                <div class="sicbo-box-value">4-10</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>ODD</div>
                                <div class="sicbo-box-value">1:1</div>
                              </div>
                            </div>
                          </div>
                          <div class="sicbo-cube-box-container">
                            <div class="sicbo-top-box sicbo-title-box">
                              30:1
                            </div>
                            <div class="sicbo-cube-box-group">
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Any Triple</div>
                              </div>
                            </div>
                          </div>
                          <div class="sicbo-cube-box-container">
                            <div class="sicbo-top-box sicbo-title-box">
                              1:1 Lose to Any Triple
                            </div>
                            <div class="sicbo-cube-box-group">
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Even</div>
                                <div class="sicbo-box-value">1:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box sicbo-middle-top-box-odd suspended-box"
                              >
                                <div>Big</div>
                                <div class="sicbo-box-value">11:17</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="sicbo-middle">
                          <div class="sicbo-middle-left">
                            <div class="sicbo-cube-box-container">
                              <div class="sicbo-top-box sicbo-title-box">
                                8:1 Each Double
                              </div>
                              <div class="sicbo-cube-box-group">
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-double suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="sicbo-cube-box-container">
                              <div class="sicbo-top-box sicbo-title-box">
                                150:1 Each Tripple
                              </div>
                              <div class="sicbo-cube-box-group">
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                    alt="Dice 1"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                    alt="Dice 2"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                    alt="Dice 3"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                    alt="Dice 4"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                    alt="Dice 5"
                                  />
                                </div>
                                <div
                                  class="sicbo-cube-box sicbo-square-box sicbo-cube-tripple suspended-box"
                                >
                                  <img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  /><img
                                    src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                    alt="Dice 6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="sicbo-middle-right">
                            <div class="sicbo-middle-top-row">
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>4</div>
                                <div class="sicbo-box-value">50:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>5</div>
                                <div class="sicbo-box-value">20:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>6</div>
                                <div class="sicbo-box-value">15:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>7</div>
                                <div class="sicbo-box-value">12:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>8</div>
                                <div class="sicbo-box-value">8:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>9</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>10</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>11</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>12</div>
                                <div class="sicbo-box-value">6:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>13</div>
                                <div class="sicbo-box-value">8:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>14</div>
                                <div class="sicbo-box-value">12:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>15</div>
                                <div class="sicbo-box-value">15:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>16</div>
                                <div class="sicbo-box-value">20:1</div>
                              </div>
                              <div
                                class="sicbo-middle-top-box sicbo-square-box suspended-box"
                              >
                                <div>17</div>
                                <div class="sicbo-box-value">50:1</div>
                              </div>
                            </div>
                            <div class="sicbo-bottom">
                              <div class="sicbo-cube-box-container">
                                <div class="sicbo-top-box sicbo-title-box">
                                  5:1 Two Dice
                                </div>
                                <div class="sicbo-cube-box-group">
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-combination suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    /><img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="sicbo-middle-middle-row">
                              <div class="sicbo-cube-box-container">
                                <div class="sicbo-top-box sicbo-title-box">
                                  <span>1:1 on Sinlge</span
                                  ><span>2:1 on Double</span
                                  ><span>3:1 on Tripple</span>
                                </div>
                                <div class="sicbo-cube-box-group">
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice1.png"
                                      alt="Dice 1"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice2.png"
                                      alt="Dice 2"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice3.png"
                                      alt="Dice 3"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice4.png"
                                      alt="Dice 4"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice5.png"
                                      alt="Dice 5"
                                    />
                                  </div>
                                  <div
                                    class="sicbo-cube-box sicbo-square-box sicbo-cube-single suspended-box"
                                  >
                                    <img
                                      src="https://versionobj.ecoassetsservice.com/v29/static/front/img/dice6.png"
                                      alt="Dice 6"
                                    />
                                  </div>
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
                        ><a href="/casino-results/sicbo2">View All</a></span
                      >
                    </div>
                    <div class="casino-last-results">
                      <span class="result">15</span><span class="result">6</span
                      ><span class="result">12</span
                      ><span class="result">12</span
                      ><span class="result">11</span
                      ><span class="result">9</span
                      ><span class="result">13</span
                      ><span class="result">14</span
                      ><span class="result">12</span
                      ><span class="result">10</span>
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
  name: "Sicbo2Component",
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
