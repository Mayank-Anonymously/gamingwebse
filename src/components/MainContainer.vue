<template>
  <div class="main-container">
    <div class="center-main-container home-page">
      <div class="center-container">
        <div class="latest-event d-xl-flex">
          <div
            v-for="(event, index) in latestEvents"
            :key="index"
            class="latest-event-item"
          >
            <a :href="event.link" class="blink_me">
              <i :class="['d-icon', 'me-1', event.icon]"></i>
              <span>{{ event.name }}</span>
            </a>
          </div>
        </div>

        <ul class="nav nav-pills sports-tab">
          <li v-for="(item, index) in sportsTabs" :key="index" class="nav-item">
            <a
              :class="['nav-link', item.active ? 'active' : '']"
              :href="item.link"
              @click="setActiveTab(item.name)"
            >
              <div class="d-xl-none">
                <i :class="['icon', item.icon]"></i>
              </div>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>

        <!-- // Horse Racing Start -->

        <div class="tab-content mt-1">
          <div class="tab-pane active">
            <div class="nav nav-pills" role="tablist">
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="0"
                  id="horse-tabs-tab-0"
                  aria-controls="horse-tabs-tabpane-0"
                  aria-selected="true"
                  class="nav-link active"
                  tabindex="0"
                  href="#"
                  >ZA</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="1"
                  id="horse-tabs-tab-1"
                  aria-controls="horse-tabs-tabpane-1"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >GB</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="2"
                  id="horse-tabs-tab-2"
                  aria-controls="horse-tabs-tabpane-2"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >FR</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="3"
                  id="horse-tabs-tab-3"
                  aria-controls="horse-tabs-tabpane-3"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >IE</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="4"
                  id="horse-tabs-tab-4"
                  aria-controls="horse-tabs-tabpane-4"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >IN</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="5"
                  id="horse-tabs-tab-5"
                  aria-controls="horse-tabs-tabpane-5"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >AU</a
                >
              </div>
            </div>
            <div class="tab-content">
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-0"
                aria-labelledby="horse-tabs-tab-0"
                class="fade tab-pane active show"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Kenilworth</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/522512210"
                          ><span class="">16:50</span></a
                        ><a href="/game-details/10/753625646"
                          ><span class="">17:25</span></a
                        ><a href="/game-details/10/466564316"
                          ><span class="">18:05</span></a
                        ><a href="/game-details/10/799114007"
                          ><span class="">18:40</span></a
                        ><a href="/game-details/10/672422358"
                          ><span class="">19:15</span></a
                        ><a href="/game-details/10/798736036"
                          ><span class="">19:50</span></a
                        ><a href="/game-details/10/558222466"
                          ><span class="">20:25</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Turffontein</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/857915907"
                          ><span class="">16:35</span></a
                        ><a href="/game-details/10/671747623"
                          ><span class="">17:10</span></a
                        ><a href="/game-details/10/816806428"
                          ><span class="">17:50</span></a
                        ><a href="/game-details/10/523287912"
                          ><span class="">18:25</span></a
                        ><a href="/game-details/10/506233155"
                          ><span class="">19:00</span></a
                        ><a href="/game-details/10/768078696"
                          ><span class="">19:35</span></a
                        ><a href="/game-details/10/551276266"
                          ><span class="">20:10</span></a
                        ><a href="/game-details/10/855438775"
                          ><span class="">20:45</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-1"
                aria-labelledby="horse-tabs-tab-1"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Newcastle</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/804088070"
                          ><span class="">19:30</span></a
                        ><a href="/game-details/10/467794779"
                          ><span class="">20:05</span></a
                        ><a href="/game-details/10/836143573"
                          ><span class="">20:40</span></a
                        ><a href="/game-details/10/548246456"
                          ><span class="">21:15</span></a
                        ><a href="/game-details/10/645703339"
                          ><span class="">21:45</span></a
                        ><a href="/game-details/10/751801868"
                          ><span class="">22:15</span></a
                        ><a href="/game-details/10/569002940"
                          ><span class="">22:45</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Ffos Las</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/700701997"
                          ><span class="">17:42</span></a
                        ><a href="/game-details/10/705990928"
                          ><span class="">18:12</span></a
                        ><a href="/game-details/10/522572098"
                          ><span class="">18:45</span></a
                        ><a href="/game-details/10/784761518"
                          ><span class="">19:21</span></a
                        ><a href="/game-details/10/536432736"
                          ><span class="">19:55</span></a
                        ><a href="/game-details/10/533527203"
                          ><span class="">20:28</span></a
                        ><a href="/game-details/10/469328262"
                          ><span class="">21:01</span></a
                        ><a href="/game-details/10/506740577"
                          ><span class="">21:31</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Chelmsford City</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/699198030"
                          ><span class="">18:25</span></a
                        ><a href="/game-details/10/549072908"
                          ><span class="">19:00</span></a
                        ><a href="/game-details/10/677902363"
                          ><span class="">19:40</span></a
                        ><a href="/game-details/10/752095018"
                          ><span class="">20:10</span></a
                        ><a href="/game-details/10/795653107"
                          ><span class="">20:45</span></a
                        ><a href="/game-details/10/496145617"
                          ><span class="">21:22</span></a
                        ><a href="/game-details/10/592188386"
                          ><span class="">21:57</span></a
                        ><a href="/game-details/10/829556044"
                          ><span class="">22:30</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Wolverhampton</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/776491359"
                          ><span class="">23:00</span></a
                        ><a href="/game-details/10/857302827"
                          ><span class="">23:30</span></a
                        ><a href="/game-details/10/768964782"
                          ><span class="">00:00</span></a
                        ><a href="/game-details/10/527742028"
                          ><span class="">00:30</span></a
                        ><a href="/game-details/10/697336842"
                          ><span class="">01:00</span></a
                        ><a href="/game-details/10/846357885"
                          ><span class="">01:30</span></a
                        ><a href="/game-details/10/891562978"
                          ><span class="">02:00</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-2"
                aria-labelledby="horse-tabs-tab-2"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Chantilly</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/614285338"
                          ><span class="">17:00</span></a
                        ><a href="/game-details/10/789143137"
                          ><span class="">17:35</span></a
                        ><a href="/game-details/10/772285654"
                          ><span class="">18:10</span></a
                        ><a href="/game-details/10/500075947"
                          ><span class="">18:45</span></a
                        ><a href="/game-details/10/906387512"
                          ><span class="">19:20</span></a
                        ><a href="/game-details/10/770185139"
                          ><span class="">20:02</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-3"
                aria-labelledby="horse-tabs-tab-3"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Fairyhouse</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/675734673"
                          ><span class="">17:30</span></a
                        ><a href="/game-details/10/654475100"
                          ><span class="">18:02</span></a
                        ><a href="/game-details/10/643716578"
                          ><span class="">18:37</span></a
                        ><a href="/game-details/10/811993117"
                          ><span class="">19:15</span></a
                        ><a href="/game-details/10/811686672"
                          ><span class="">19:48</span></a
                        ><a href="/game-details/10/508177076"
                          ><span class="">20:21</span></a
                        ><a href="/game-details/10/751528841"
                          ><span class="">20:56</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-4"
                aria-labelledby="horse-tabs-tab-4"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>DEMO</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/612605375"
                          ><span class="">15:00</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>MUMBAI</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/739277783"
                          ><span class="active">16:00</span></a
                        ><a href="/game-details/10/614512622"
                          ><span class="active">16:30</span></a
                        ><a href="/game-details/10/694378920"
                          ><span class="">17:00</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-5"
                aria-labelledby="horse-tabs-tab-5"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Albany</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/653590340"
                          ><span class="">16:53</span></a
                        ><a href="/game-details/10/619813342"
                          ><span class="">17:22</span></a
                        ><a href="/game-details/10/737961451"
                          ><span class="">17:54</span></a
                        ><a href="/game-details/10/614681824"
                          ><span class="">18:20</span></a
                        ><a href="/game-details/10/629227598"
                          ><span class="">18:49</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Temora</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/680499616"
                          ><span class="">16:40</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Shepparton</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/711161900"
                          ><span class="active">16:32</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Albion Park</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/10/766475181"
                          ><span class="">16:43</span></a
                        ><a href="/game-details/10/737601843"
                          ><span class="">17:15</span></a
                        ><a href="/game-details/10/861122413"
                          ><span class="">17:45</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- // Horse Racing End -->
        <!-- greyhoundRacing start  -->

        <div class="tab-content mt-1">
          <div class="tab-pane active">
            <div class="nav nav-pills" role="tablist">
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="0"
                  id="horse-tabs-tab-0"
                  aria-controls="horse-tabs-tabpane-0"
                  aria-selected="true"
                  class="nav-link active"
                  tabindex="0"
                  href="#"
                  >GB</a
                >
              </div>
              <div class="nav-item">
                <a
                  role="tab"
                  data-rr-ui-event-key="1"
                  id="horse-tabs-tab-1"
                  aria-controls="horse-tabs-tabpane-1"
                  aria-selected="false"
                  tabindex="-1"
                  class="nav-link"
                  href="#"
                  >AU</a
                >
              </div>
            </div>
            <div class="tab-content">
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-0"
                aria-labelledby="horse-tabs-tab-0"
                class="fade tab-pane active show"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Newcastle</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/840566429"
                          ><span class="">19:59</span></a
                        ><a href="/game-details/65/837370429"
                          ><span class="">20:18</span></a
                        ><a href="/game-details/65/463461187"
                          ><span class="">20:37</span></a
                        ><a href="/game-details/65/662239101"
                          ><span class="">20:56</span></a
                        ><a href="/game-details/65/712159696"
                          ><span class="">21:14</span></a
                        ><a href="/game-details/65/733744980"
                          ><span class="">21:33</span></a
                        ><a href="/game-details/65/511873868"
                          ><span class="">21:52</span></a
                        ><a href="/game-details/65/834793737"
                          ><span class="">22:11</span></a
                        ><a href="/game-details/65/748645871"
                          ><span class="">22:29</span></a
                        ><a href="/game-details/65/785813011"
                          ><span class="">22:48</span></a
                        ><a href="/game-details/65/626272716"
                          ><span class="">23:07</span></a
                        ><a href="/game-details/65/669678702"
                          ><span class="">23:26</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Oxford</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/774081285"
                          ><span class="">23:17</span></a
                        ><a href="/game-details/65/508967712"
                          ><span class="">23:34</span></a
                        ><a href="/game-details/65/463928493"
                          ><span class="">23:51</span></a
                        ><a href="/game-details/65/606285127"
                          ><span class="">00:09</span></a
                        ><a href="/game-details/65/519778827"
                          ><span class="">00:26</span></a
                        ><a href="/game-details/65/630033717"
                          ><span class="">00:44</span></a
                        ><a href="/game-details/65/684968557"
                          ><span class="">01:01</span></a
                        ><a href="/game-details/65/540598403"
                          ><span class="">01:21</span></a
                        ><a href="/game-details/65/511550144"
                          ><span class="">01:39</span></a
                        ><a href="/game-details/65/669955114"
                          ><span class="">01:56</span></a
                        ><a href="/game-details/65/561750499"
                          ><span class="">02:13</span></a
                        ><a href="/game-details/65/470621593"
                          ><span class="">02:31</span></a
                        ><a href="/game-details/65/576752381"
                          ><span class="">02:48</span></a
                        ><a href="/game-details/65/918003801"
                          ><span class="">03:04</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Doncaster</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/756428855"
                          ><span class="">16:43</span></a
                        ><a href="/game-details/65/810910341"
                          ><span class="">16:59</span></a
                        ><a href="/game-details/65/613551906"
                          ><span class="">17:17</span></a
                        ><a href="/game-details/65/480042242"
                          ><span class="">17:34</span></a
                        ><a href="/game-details/65/817681327"
                          ><span class="">17:51</span></a
                        ><a href="/game-details/65/543390273"
                          ><span class="">18:08</span></a
                        ><a href="/game-details/65/823939016"
                          ><span class="">18:24</span></a
                        ><a href="/game-details/65/480679486"
                          ><span class="">18:42</span></a
                        ><a href="/game-details/65/676228105"
                          ><span class="">18:59</span></a
                        ><a href="/game-details/65/490783316"
                          ><span class="">23:41</span></a
                        ><a href="/game-details/65/616230181"
                          ><span class="">23:59</span></a
                        ><a href="/game-details/65/779222138"
                          ><span class="">00:16</span></a
                        ><a href="/game-details/65/743060118"
                          ><span class="">00:34</span></a
                        ><a href="/game-details/65/499734574"
                          ><span class="">00:54</span></a
                        ><a href="/game-details/65/759384368"
                          ><span class="">01:12</span></a
                        ><a href="/game-details/65/868950224"
                          ><span class="">01:28</span></a
                        ><a href="/game-details/65/881409096"
                          ><span class="">01:46</span></a
                        ><a href="/game-details/65/883230017"
                          ><span class="">02:04</span></a
                        ><a href="/game-details/65/770611916"
                          ><span class="">02:22</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Swindon</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/558196025"
                          ><span class="">20:06</span></a
                        ><a href="/game-details/65/808418675"
                          ><span class="">20:24</span></a
                        ><a href="/game-details/65/835775291"
                          ><span class="">20:43</span></a
                        ><a href="/game-details/65/490642545"
                          ><span class="">21:02</span></a
                        ><a href="/game-details/65/578641636"
                          ><span class="">21:21</span></a
                        ><a href="/game-details/65/768877334"
                          ><span class="">21:39</span></a
                        ><a href="/game-details/65/627914181"
                          ><span class="">21:58</span></a
                        ><a href="/game-details/65/587375170"
                          ><span class="">22:17</span></a
                        ><a href="/game-details/65/634569948"
                          ><span class="">22:36</span></a
                        ><a href="/game-details/65/815518604"
                          ><span class="">22:54</span></a
                        ><a href="/game-details/65/602304828"
                          ><span class="">23:13</span></a
                        ><a href="/game-details/65/629516474"
                          ><span class="">23:32</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Monmore</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/854517973"
                          ><span class="">00:01</span></a
                        ><a href="/game-details/65/619743506"
                          ><span class="">00:18</span></a
                        ><a href="/game-details/65/621131606"
                          ><span class="">00:36</span></a
                        ><a href="/game-details/65/626953883"
                          ><span class="">00:52</span></a
                        ><a href="/game-details/65/492531120"
                          ><span class="">01:09</span></a
                        ><a href="/game-details/65/890899943"
                          ><span class="">01:26</span></a
                        ><a href="/game-details/65/511095875"
                          ><span class="">01:43</span></a
                        ><a href="/game-details/65/893227433"
                          ><span class="">02:01</span></a
                        ><a href="/game-details/65/572627824"
                          ><span class="">02:17</span></a
                        ><a href="/game-details/65/833463791"
                          ><span class="">02:34</span></a
                        ><a href="/game-details/65/670333657"
                          ><span class="">02:53</span></a
                        ><a href="/game-details/65/793122358"
                          ><span class="">03:09</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Hove</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/672015290"
                          ><span class="">23:38</span></a
                        ><a href="/game-details/65/728064995"
                          ><span class="">23:56</span></a
                        ><a href="/game-details/65/614067128"
                          ><span class="">00:12</span></a
                        ><a href="/game-details/65/645567468"
                          ><span class="">00:29</span></a
                        ><a href="/game-details/65/552569321"
                          ><span class="">00:46</span></a
                        ><a href="/game-details/65/719979966"
                          ><span class="">01:03</span></a
                        ><a href="/game-details/65/763419120"
                          ><span class="">01:19</span></a
                        ><a href="/game-details/65/495704930"
                          ><span class="">01:37</span></a
                        ><a href="/game-details/65/647893749"
                          ><span class="">01:54</span></a
                        ><a href="/game-details/65/907662218"
                          ><span class="">02:11</span></a
                        ><a href="/game-details/65/851788856"
                          ><span class="">02:29</span></a
                        ><a href="/game-details/65/700861150"
                          ><span class="">02:46</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Perry Barr</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/530451739"
                          ><span class="">00:31</span></a
                        ><a href="/game-details/65/887308451"
                          ><span class="">00:48</span></a
                        ><a href="/game-details/65/696850517"
                          ><span class="">01:06</span></a
                        ><a href="/game-details/65/513395320"
                          ><span class="">01:23</span></a
                        ><a href="/game-details/65/673603582"
                          ><span class="">01:41</span></a
                        ><a href="/game-details/65/659279526"
                          ><span class="">01:58</span></a
                        ><a href="/game-details/65/755254542"
                          ><span class="">02:14</span></a
                        ><a href="/game-details/65/899681994"
                          ><span class="">02:32</span></a
                        ><a href="/game-details/65/590064710"
                          ><span class="">02:50</span></a
                        ><a href="/game-details/65/613220724"
                          ><span class="">03:06</span></a
                        ><a href="/game-details/65/900477874"
                          ><span class="">03:22</span></a
                        ><a href="/game-details/65/591405995"
                          ><span class="">03:41</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Central Park</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/732517088"
                          ><span class="">00:07</span></a
                        ><a href="/game-details/65/615677222"
                          ><span class="">00:23</span></a
                        ><a href="/game-details/65/541012049"
                          ><span class="">00:41</span></a
                        ><a href="/game-details/65/587916814"
                          ><span class="">00:57</span></a
                        ><a href="/game-details/65/848803808"
                          ><span class="">01:14</span></a
                        ><a href="/game-details/65/595218627"
                          ><span class="">01:31</span></a
                        ><a href="/game-details/65/808827838"
                          ><span class="">01:49</span></a
                        ><a href="/game-details/65/611506440"
                          ><span class="">02:06</span></a
                        ><a href="/game-details/65/734977394"
                          ><span class="">02:24</span></a
                        ><a href="/game-details/65/825205122"
                          ><span class="">02:41</span></a
                        ><a href="/game-details/65/523055084"
                          ><span class="">02:58</span></a
                        ><a href="/game-details/65/514139528"
                          ><span class="">03:16</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                id="horse-tabs-tabpane-1"
                aria-labelledby="horse-tabs-tab-1"
                class="fade tab-pane"
              >
                <div class="bet-table position-relative horse-table">
                  <div class="bet-table-body">
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>The Meadows</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/493249256"
                          ><span class="">16:51</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Cannington</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/831137601"
                          ><span class="">16:41</span></a
                        ><a href="/game-details/65/528960273"
                          ><span class="">17:05</span></a
                        ><a href="/game-details/65/696148243"
                          ><span class="">17:20</span></a
                        ><a href="/game-details/65/800083107"
                          ><span class="">17:42</span></a
                        ><a href="/game-details/65/852434021"
                          ><span class="">17:59</span></a
                        ><a href="/game-details/65/865798141"
                          ><span class="">18:17</span></a
                        ><a href="/game-details/65/781310889"
                          ><span class="">18:35</span></a
                        ><a href="/game-details/65/761399946"
                          ><span class="">18:53</span></a
                        ><a href="/game-details/65/705859682"
                          ><span class="">19:12</span></a
                        ><a href="/game-details/65/552463250"
                          ><span class="">19:27</span></a
                        ><a href="/game-details/65/560824416"
                          ><span class="">19:42</span></a
                        ><a href="/game-details/65/578627698"
                          ><span class="">20:02</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Dubbo</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/544732212"
                          ><span class="">16:48</span></a
                        ><a href="/game-details/65/622837591"
                          ><span class="">17:05</span></a
                        ><a href="/game-details/65/760710053"
                          ><span class="">17:22</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>The Gardens</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/663336350"
                          ><span class="">16:48</span></a
                        ><a href="/game-details/65/621389970"
                          ><span class="">17:08</span></a
                        ><a href="/game-details/65/730194866"
                          ><span class="">17:27</span></a
                        >
                      </div>
                    </div>
                    <div class="bet-table-row">
                      <div class="bet-nation-name">
                        <div class="game-icon">
                          <i class="fa-solid fa-tv"></i>
                        </div>
                        <div class="bet-nation-game-name">
                          <span>Wentworth Park</span>
                        </div>
                      </div>
                      <div class="horse-time-detail">
                        <a href="/game-details/65/877971516"
                          ><span class="">16:38</span></a
                        ><a href="/game-details/65/662068049"
                          ><span class="">16:58</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- greyhoundRacing End  -->

        <div class="tab-content mt-1">
          <div class="tab-pane active">
            <div class="bet-table">
              <div class="bet-table-header">
                <div class="bet-nation-name"><b>Game</b></div>
                <div class="bet-nation-odd"><b>1</b></div>
                <div class="bet-nation-odd"><b>X</b></div>
                <div class="bet-nation-odd"><b>2</b></div>
              </div>
              <div class="bet-table-body">
                <div class="bet-table-row" v-if="noRecordsFound">
                  No records found
                </div>
                <div
                  class="bet-table-row"
                  v-for="(match, index) in filteredData.match"
                  :key="index"
                >
                  <div class="bet-nation-name">
                    <a :href="match.gameLink" class="bet-nation-game-name">
                      <span>{{ match.gameName }}</span>
                      <span class="d-none d-md-inline-block">&nbsp;&nbsp;</span>
                      <span>{{ match.date }}</span>
                    </a>
                    <div class="game-icons">
                      <div
                        class="game-icon"
                        v-for="(icon, idx) in match.gameIcons"
                        :key="idx"
                      >
                        <span
                          v-if="icon.type === 'active'"
                          class="active"
                        ></span>
                        <i v-if="icon.type === 'tv'" class="fa-solid fa-tv"></i>
                        <img
                          v-if="icon.type === 'image'"
                          :src="icon.src"
                          :alt="icon.alt"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="bet-nation-odd"
                    v-for="(odd, idx) in match.odds"
                    :key="idx"
                  >
                    <div class="back odd-box">
                      <span class="bet-odd"
                        ><b>{{ odd.back }}</b></span
                      >
                    </div>
                    <div class="lay odd-box">
                      <span class="bet-odd"
                        ><b>{{ odd.lay }}</b></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="casino-list mt-2">
          <div
            v-for="(casino, index) in casinoItems"
            :key="index"
            class="casino-list-item"
          >
            <a :href="casino.link">
              <div
                class="casino-list-item-banner"
                :style="{
                  backgroundImage: `url('${casino.image}'), url('https://dataobj.ecoassetsservice.com/casino-icons/default.jpg')`,
                }"
              ></div>
              <div class="casino-list-name">{{ casino.name }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import casinolist from "../../utils/casinolist.json";
import gamelist from "../../utils/gamelist.json";
import exclusive from "../../utils/exclusive.json";
import gamesbar from "../../utils/gamesbar.json";
export default {
  data() {
    return {
      casinoItems: casinolist,
      tableOpacity: 1,
      matches: gamelist,
      latestEvents: exclusive,
      sportsTabs: gamesbar,
      filteredData: [],
      // Flag for no records found
      noRecordsFound: false,
      active: false,
      sportName: "",
    };
  },
  created() {
    this.filteredData = this.matches[0];
  },
  methods: {
    setActiveTab(name) {
      this.sportName = !name ? "Politics" : name;
      // Filter the data based on the selected tab's filter
      this.filteredData = this.matches.filter((data) => data.game === name)[0];
      // Check if no records are found
      this.noRecordsFound = this.filteredData.length === 0;
      this.active = true;
      this.sportsTabs.forEach((item) => {
        item.active = item.name === name;
      });
    },
    showRacingList(raceType) {
      if (raceType === "horseRacing") {
        this.overlayVisible = "horseRacing";
      } else {
        this.overlayVisible = "greyhoundRacing";
      }
      this.tableOpacity = 0.3;
    },
    closeOverlay() {
      this.overlayVisible = null;
      this.tableOpacity = 1;
    },
    setNavActiveTab(name) {
      // Loop through sportsTabs and set the active tab to true and others to false
      this.sportsTabs.forEach((item) => {
        item.active = item.name === name;
      });
    },
  },
};
</script>

<style scoped>
/* Add your CSS here from the original HTML */
</style>
