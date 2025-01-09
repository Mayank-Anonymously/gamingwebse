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
                      <div class="roulette-box-container">
                        <div class="board-in">
                          <div class="board-right">
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">2to1</span
                                ><span class="rate"><b>3.75</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="138"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">2to1</span
                                ><span class="rate"><b>2.75</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="137"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">2to1</span
                                ><span class="rate"><b>2.75</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="136"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="board-bottom">
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">1st12</span
                                ><span class="rate"><b>2.75</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="133"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">2nd12</span
                                ><span class="rate"><b>3</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="134"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">3rd12</span
                                ><span class="rate"><b>3.35</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="135"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">1 - 18</span
                                ><span class="rate"><b>1.9</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="139"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">Even</span
                                ><span class="rate"><b>2</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="144"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">Red</span
                                ><span class="rate"><b>2.15</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="141"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">Black</span
                                ><span class="rate"><b>1.9</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="142"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">Odd</span
                                ><span class="rate"><b>2</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="143"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell yellow">
                              <div class="board-cell-in">
                                <span class="board-text">19 - 36</span
                                ><span class="rate"><b>2.15</b></span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="140"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div class="board-center">
                            <div class="board-cell green">
                              <div class="board-cell-in">
                                <span class="board-number">0</span>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="1"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">1</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="38"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="2"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="110"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="74"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">2</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="39"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="3"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="145"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="75"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">3</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="40"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="4"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="146"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="98"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">4</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="41"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="5"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="76"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">5</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="52"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="6"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="111"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="77"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">6</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="63"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="7"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="112"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="99"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">7</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="42"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="8"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="78"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">8</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="53"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="9"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="113"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="79"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">9</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="64"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="10"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="114"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="100"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">10</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="43"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="11"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="80"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">11</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="54"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="12"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="115"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="81"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">12</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="65"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="13"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="116"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="101"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">13</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="44"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="14"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="82"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">14</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="55"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="15"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="117"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="83"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">15</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="66"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="16"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="118"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="102"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">16</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="45"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="17"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="84"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">17</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="56"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="18"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="119"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="85"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">18</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="67"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="19"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="120"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="103"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">19</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="46"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="20"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="86"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">20</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="57"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="21"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="121"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="87"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">21</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="68"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="22"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="122"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="104"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">22</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="47"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="23"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="88"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">23</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="58"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="24"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="123"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="89"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">24</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="69"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="25"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="124"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="105"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">25</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="48"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="26"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="90"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">26</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="59"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="27"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="125"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="91"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">27</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="70"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="28"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="126"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="106"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">28</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="49"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="29"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="92"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">29</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="60"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="30"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="127"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="93"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">30</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="71"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="31"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="128"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="107"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black suspended-box">
                              <div class="board-cell-in">
                                <span class="board-number">31</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="50"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="32"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="94"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">32</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="61"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="33"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="129"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="95"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">33</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="72"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="34"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="130"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="108"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">34</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="51"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="35"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="96"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell black">
                              <div class="board-cell-in">
                                <span class="board-number">35</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="62"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="36"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="131"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="97"
                                ></div>
                              </div>
                            </div>
                            <div class="board-cell red">
                              <div class="board-cell-in">
                                <span class="board-number">36</span>
                                <div
                                  class="bet-chip-area center-left coin-place"
                                  id="73"
                                ></div>
                                <div
                                  class="bet-chip-area center-center coin-place"
                                  id="37"
                                ></div>
                                <div
                                  class="bet-chip-area bottom-left coin-place"
                                  id="132"
                                ></div>
                                <div
                                  class="bet-chip-area top-center coin-place"
                                  id="109"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="casino-last-result-title">
                      <span>Last Result</span
                      ><span
                        ><a href="/casino-results/ourroullete"
                          >View All</a
                        ></span
                      >
                    </div>
                    <div class="casino-last-results">
                      <span class="result black">06</span
                      ><span class="result red">27</span
                      ><span class="result red">21</span
                      ><span class="result black">31</span
                      ><span class="result red">30</span
                      ><span class="result red">14</span
                      ><span class="result black">29</span
                      ><span class="result black">04</span
                      ><span class="result red">36</span
                      ><span class="result red">05</span>
                    </div>
                    <div
                      class="sidebar-box my-bet-container roulette-rules mt-2 w-50 d-xl-none"
                    >
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th class="text-center">Single</th>
                              <th class="text-center">Split</th>
                              <th class="text-center">Street</th>
                              <th class="text-center">Corner</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-center back"><b>30</b></td>
                              <td class="text-center back"><b>15.1</b></td>
                              <td class="text-center back"><b>10.1</b></td>
                              <td class="text-center back"><b>7.55</b></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
  name: "OurRoulleteComponent",
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
