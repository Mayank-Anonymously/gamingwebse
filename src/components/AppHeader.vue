<template>
  <section class="header">
    <div class="header-top">
      <div class="logo-header">
        <a class="d-xl-none" href="https://allpanelexch.com/home"
          ><i class="fas fa-home me-1"></i></a
        ><a href="https://allpanelexch.com/home"
          ><img
            src="https://sitethemedata.com/sitethemes/allpanelexch.com/front/logo.png"
        /></a>
      </div>
      <div class="user-details">
        <div class="search-box-container d-none d-xl-block">
          <div class="search-box">
            <input
              type="search"
              placeholder="Search here"
              class="form-control"
              value=""
            /><a><i class="fas fa-search-plus"></i></a>
          </div>
        </div>
        <div class="header-rules ms-3">
          <div>
            <a class="rules-link pointer"><b>Rules</b></a>
          </div>
        </div>
        <div class="user-balance ms-1 ms-xl-3">
          <div><span>Balance:</span><b>1500</b></div>
          <div>
            <span>Exp:</span><b class="pointer">0</b>
            <div class="dropdown">
              <a
                @click="toggleDropdown"
                class="user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle"
              >
                Demo <i class="fas fa-chevron-down ms-1"></i>
              </a>
              <ul
                v-if="isDropdownOpen"
                class="dropdown-menu show"
                x-placement="bottom-end"
              >
                <a href="/account-statement">
                  <li class="dropdown-item">Account Statement</li>
                </a>
                <a href="/current-bet">
                  <li class="dropdown-item">Current Bet</li>
                </a>
                <a href="/casino-results">
                  <li class="dropdown-item">Casino Results</li>
                </a>
                <a>
                  <li class="dropdown-item">Set Button Values</li>
                </a>
                <a class="d-xl-none">
                  <li class="dropdown-item">Rules</li>
                </a>
                <a class="dropdown-item d-xl-none">
                  Balance
                  <div class="form-check float-end">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    />
                  </div>
                </a>
                <a class="dropdown-item d-xl-none">
                  Exposure
                  <div class="form-check float-end">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked=""
                    />
                  </div>
                </a>
                <hr class="dropdown-divider" role="separator" />
                <li class="dropdown-item">SignOut</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <a
            @click="toggleDropdown"
            class="user-name ms-3 d-none d-xl-block dropdown-toggle"
            id="react-aria8131644381-6"
            aria-expanded="false"
            >Demo<i class="fas fa-chevron-down ms-1"></i
          ></a>
        </div>
      </div>
      <div class="search-box-container d-xl-none">
        <div class="search-box">
          <input
            type="search"
            placeholder="Search here"
            class="form-control"
            value=""
          /><a><i class="fas fa-search-plus"></i></a>
        </div>
        <div class="news">
          <marquee scrollamount="3"></marquee>
        </div>
        <div class="depowith"></div>
      </div>
    </div>
    <div class="header-bottom d-none d-xl-block">
      <nav class="navbar navbar-expand">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/sports-book/33"
              >Lottery</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/all-sports/4"
              >Cricket</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/all-sports/2"
              >Tennis</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/all-sports/1"
              >Football</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://allpanelexch.com/all-sports/8"
              >Table Tennis</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://allpanelexch.com/casino-list/LC/4/22"
              >Baccarat</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://allpanelexch.com/casino-list/LC/4/24"
              >32 Cards</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://allpanelexch.com/casino-list/LC/4/20"
              >Teenpatti</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://allpanelexch.com/casino-list/LC/4/21"
              >Poker</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://allpanelexch.com/casino-list/LC/4/27"
              >Lucky 7</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isDropdownOpen: false, // Controls the visibility of the dropdown
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<!-- <style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #004ba0;
  color: white;
  padding: 10px 20px;
}
.menu a {
  margin-right: 15px;
  color: white;
  text-decoration: none;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>

<style type="text/css">
@font-face {
  font-weight: 400;
  font-style: normal;
  font-family: circular;

  src: url("chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Book.woff2")
    format("woff2");
}

@font-face {
  font-weight: 700;
  font-style: normal;
  font-family: circular;

  src: url("chrome-extension://liecbddmkiiihnedobmlmillhodjkdmb/fonts/CircularXXWeb-Bold.woff2")
    format("woff2");
}
</style>
<style id="_goober">
@keyframes go2264125279 {
  from {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  to {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
}

@keyframes go3020080000 {
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes go463499852 {
  from {
    transform: scale(0) rotate(90deg);
    opacity: 0;
  }

  to {
    transform: scale(1) rotate(90deg);
    opacity: 1;
  }
}

@keyframes go1268368563 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes go1310225428 {
  from {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  to {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
}

@keyframes go651618207 {
  0% {
    height: 0;
    width: 0;
    opacity: 0;
  }

  40% {
    height: 0;
    width: 6px;
    opacity: 1;
  }

  100% {
    opacity: 1;
    height: 10px;
  }
}

@keyframes go901347462 {
  from {
    transform: scale(0.6);
    opacity: 0.4;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.go4109123758 {
  z-index: 9999;
}

.go4109123758 > * {
  pointer-events: auto;
}

/* CSS variables. */
:root {
  --PhoneInput-color--focus: #03b2cb;
  --PhoneInputInternationalIconPhone-opacity: 0.8;
  --PhoneInputInternationalIconGlobe-opacity: 0.65;
  --PhoneInputCountrySelect-marginRight: 0.35em;
  --PhoneInputCountrySelectArrow-width: 0.3em;
  --PhoneInputCountrySelectArrow-marginLeft: var(
    --PhoneInputCountrySelect-marginRight
  );
  --PhoneInputCountrySelectArrow-borderWidth: 1px;
  --PhoneInputCountrySelectArrow-opacity: 0.45;
  --PhoneInputCountrySelectArrow-color: currentColor;
  --PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
  --PhoneInputCountrySelectArrow-transform: rotate(45deg);
  --PhoneInputCountryFlag-aspectRatio: 1.5;
  --PhoneInputCountryFlag-height: 1em;
  --PhoneInputCountryFlag-borderWidth: 1px;
  --PhoneInputCountryFlag-borderColor: rgba(0, 0, 0, 0.5);
  --PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
  --PhoneInputCountryFlag-backgroundColor--loading: rgba(0, 0, 0, 0.1);
}

.PhoneInput {
  display: flex;
  align-items: center;
}

.PhoneInputInput {
  flex: 1;
  min-width: 0;
}

.PhoneInputCountryIcon {
  width: calc(
    var(--PhoneInputCountryFlag-height) *
      var(--PhoneInputCountryFlag-aspectRatio)
  );
  height: var(--PhoneInputCountryFlag-height);
}

.PhoneInputCountryIcon--square {
  width: var(--PhoneInputCountryFlag-height);
}

.PhoneInputCountryIcon--border {
  background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);
  box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
      var(--PhoneInputCountryFlag-borderColor),
    inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
      var(--PhoneInputCountryFlag-borderColor);
}

.PhoneInputCountryIconImg {
  display: block;

  width: 100%;
  height: 100%;
}

.PhoneInputInternationalIconPhone {
  opacity: var(--PhoneInputInternationalIconPhone-opacity);
}

.PhoneInputInternationalIconGlobe {
  opacity: var(--PhoneInputInternationalIconGlobe-opacity);
}

/* Styling native country `<select/>`. */

.PhoneInputCountry {
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  margin-right: var(--PhoneInputCountrySelect-marginRight);
}

.PhoneInputCountrySelect {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  border: 0;
  opacity: 0;
  cursor: pointer;
}

.PhoneInputCountrySelect[disabled],
.PhoneInputCountrySelect[readonly] {
  cursor: default;
}

.PhoneInputCountrySelectArrow {
  display: block;
  content: "";
  width: var(--PhoneInputCountrySelectArrow-width);
  height: var(--PhoneInputCountrySelectArrow-width);
  margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
  border-style: solid;
  border-color: var(--PhoneInputCountrySelectArrow-color);
  border-top-width: 0;
  border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
  border-left-width: 0;
  border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
  transform: var(--PhoneInputCountrySelectArrow-transform);
  opacity: var(--PhoneInputCountrySelectArrow-opacity);
}

.PhoneInputCountrySelect:focus
  + .PhoneInputCountryIcon
  + .PhoneInputCountrySelectArrow {
  opacity: 1;
  color: var(--PhoneInputCountrySelectArrow-color--focus);
}

.PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
  box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
      var(--PhoneInputCountryFlag-borderColor--focus),
    inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
      var(--PhoneInputCountryFlag-borderColor--focus);
}

.PhoneInputCountrySelect:focus
  + .PhoneInputCountryIcon
  .PhoneInputInternationalIconGlobe {
  opacity: 1;
  color: var(--PhoneInputCountrySelectArrow-color--focus);
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow,
.react-datepicker__navigation-icon::before {
  border-color: #ccc;
  border-style: solid;
  border-width: 3px 3px 0 0;
  content: "";
  display: block;
  height: 9px;
  position: absolute;
  top: 6px;
  width: 9px;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  margin-left: -4px;
  position: absolute;
  width: 0;
}

.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::after,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::after {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
}

.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before {
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}

.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::after {
  border-top: none;
  border-bottom-color: #f0f0f0;
}

.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::after {
  top: 0;
}

.react-datepicker-popper[data-placement^="bottom"]
  .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle {
  bottom: 0;
  margin-bottom: -8px;
}

.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before,
.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::after {
  border-bottom: none;
  border-top-color: #fff;
}

.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::after {
  bottom: 0;
}

.react-datepicker-popper[data-placement^="top"]
  .react-datepicker__triangle::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

.react-datepicker-wrapper {
  display: inline-block;
  padding: 0;
  border: 0;
}

.react-datepicker {
  font-family: "Helvetica Neue", helvetica, arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}

.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}

.react-datepicker--time-only .react-datepicker__time,
.react-datepicker--time-only .react-datepicker__time-box {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

.react-datepicker-popper {
  z-index: 1;
}

.react-datepicker-popper[data-placement^="bottom"] {
  padding-top: 10px;
}

.react-datepicker-popper[data-placement="bottom-end"]
  .react-datepicker__triangle,
.react-datepicker-popper[data-placement="top-end"] .react-datepicker__triangle {
  left: auto;
  right: 50px;
}

.react-datepicker-popper[data-placement^="top"] {
  padding-bottom: 10px;
}

.react-datepicker-popper[data-placement^="right"] {
  padding-left: 8px;
}

.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}

.react-datepicker-popper[data-placement^="left"] {
  padding-right: 8px;
}

.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  padding: 8px 0;
  position: relative;
}

.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

.react-datepicker__header--time:not(.react-datepicker__header--time--only) {
  border-top-left-radius: 0;
}

.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 15px;
}

.react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.react-datepicker__navigation {
  align-items: center;
  background: none;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 2px;
  padding: 0;
  border: none;
  z-index: 1;
  height: 32px;
  width: 32px;
  text-indent: -999em;
  overflow: hidden;
}

.react-datepicker__navigation--previous {
  left: 2px;
}

.react-datepicker__navigation--next {
  right: 2px;
}

.react-datepicker__navigation--next--with-time:not(
    .react-datepicker__navigation--next--with-today-button
  ) {
  right: 85px;
}

.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__navigation--years-previous {
  top: 4px;
}

.react-datepicker__navigation--years-upcoming {
  top: -4px;
}

.react-datepicker__navigation:hover *::before {
  border-color: #a6a6a6;
}

.react-datepicker__navigation-icon {
  position: relative;
  top: -1px;
  font-size: 20px;
  width: 0;
}

.react-datepicker__navigation-icon--next {
  left: -2px;
}

.react-datepicker__navigation-icon--next::before {
  transform: rotate(45deg);
  left: -7px;
}

.react-datepicker__navigation-icon--previous {
  right: -2px;
}

.react-datepicker__navigation-icon--previous::before {
  transform: rotate(225deg);
  right: -7px;
}

.react-datepicker__month-container {
  float: left;
}

.react-datepicker__year {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__year-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 180px;
}

.react-datepicker__year .react-datepicker__year-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__month .react-datepicker__month-text,
.react-datepicker__month .react-datepicker__quarter-text {
  display: inline-block;
  width: 4rem;
  margin: 2px;
}

.react-datepicker__input-time-container {
  clear: both;
  width: 100%;
  float: left;
  margin: 5px 0 10px 15px;
  text-align: left;
}

.react-datepicker__input-time-container .react-datepicker-time__caption {
  display: inline-block;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container {
  display: inline-block;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__input {
  display: inline-block;
  margin-left: 10px;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__input
  input {
  width: auto;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__input
  input[type="time"]::-webkit-inner-spin-button,
.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__input
  input[type="time"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__input
  input[type="time"] {
  -moz-appearance: textfield;
}

.react-datepicker__input-time-container
  .react-datepicker-time__input-container
  .react-datepicker-time__delimiter {
  margin-left: 5px;
  display: inline-block;
}

.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 85px;
}

.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -87px;
  top: 0;
}

.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box {
  width: 85px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + 1.7rem / 2);
  overflow-y: scroll;
  padding-right: 0;
  padding-left: 0;
  width: 100%;
  box-sizing: content-box;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item {
  height: 30px;
  padding: 5px 10px;
  white-space: nowrap;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}

.react-datepicker__time-container
  .react-datepicker__time
  .react-datepicker__time-box
  ul.react-datepicker__time-list
  li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable:not(
    .react-datepicker__week-number--selected,
    .react-datepicker__week-number--keyboard-selected
  ):hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__week-number--selected {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__week-number--selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__week-number--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}

.react-datepicker__week-number--keyboard-selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__day-names {
  white-space: nowrap;
  margin-bottom: -8px;
}

.react-datepicker__week {
  white-space: nowrap;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__day,
.react-datepicker__month-text,
.react-datepicker__quarter-text,
.react-datepicker__year-text {
  cursor: pointer;
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day--today,
.react-datepicker__month-text--today,
.react-datepicker__quarter-text--today,
.react-datepicker__year-text--today {
  font-weight: bold;
}

.react-datepicker__day--highlighted,
.react-datepicker__month-text--highlighted,
.react-datepicker__quarter-text--highlighted,
.react-datepicker__year-text--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}

.react-datepicker__day--highlighted:hover,
.react-datepicker__month-text--highlighted:hover,
.react-datepicker__quarter-text--highlighted:hover,
.react-datepicker__year-text--highlighted:hover {
  background-color: #32be3f;
}

.react-datepicker__day--highlighted-custom-1,
.react-datepicker__month-text--highlighted-custom-1,
.react-datepicker__quarter-text--highlighted-custom-1,
.react-datepicker__year-text--highlighted-custom-1 {
  color: magenta;
}

.react-datepicker__day--highlighted-custom-2,
.react-datepicker__month-text--highlighted-custom-2,
.react-datepicker__quarter-text--highlighted-custom-2,
.react-datepicker__year-text--highlighted-custom-2 {
  color: green;
}

.react-datepicker__day--holidays,
.react-datepicker__month-text--holidays,
.react-datepicker__quarter-text--holidays,
.react-datepicker__year-text--holidays {
  position: relative;
  border-radius: 0.3rem;
  background-color: #ff6803;
  color: #fff;
}

.react-datepicker__day--holidays .holiday-overlay,
.react-datepicker__month-text--holidays .holiday-overlay,
.react-datepicker__quarter-text--holidays .holiday-overlay,
.react-datepicker__year-text--holidays .holiday-overlay {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

.react-datepicker__day--holidays:hover,
.react-datepicker__month-text--holidays:hover,
.react-datepicker__quarter-text--holidays:hover,
.react-datepicker__year-text--holidays:hover {
  background-color: #cf5300;
}

.react-datepicker__day--holidays:hover .holiday-overlay,
.react-datepicker__month-text--holidays:hover .holiday-overlay,
.react-datepicker__quarter-text--holidays:hover .holiday-overlay,
.react-datepicker__year-text--holidays:hover .holiday-overlay {
  visibility: visible;
  opacity: 1;
}

.react-datepicker__day--selected,
.react-datepicker__day--in-selecting-range,
.react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__day--selected:hover,
.react-datepicker__day--in-selecting-range:hover,
.react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #bad9f1;
  color: rgb(0, 0, 0);
}

.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
.react-datepicker__month-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
.react-datepicker__quarter-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ),
.react-datepicker__year-text--in-selecting-range:not(
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--in-range
  ) {
  background-color: rgba(33, 107, 165, 0.5);
}

.react-datepicker__month--selecting-range
  .react-datepicker__day--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__year--selecting-range
  .react-datepicker__day--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__month--selecting-range
  .react-datepicker__month-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__year--selecting-range
  .react-datepicker__month-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__month--selecting-range
  .react-datepicker__quarter-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__year--selecting-range
  .react-datepicker__quarter-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__month--selecting-range
  .react-datepicker__year-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ),
.react-datepicker__year--selecting-range
  .react-datepicker__year-text--in-range:not(
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range
  ) {
  background-color: #f0f0f0;
  color: #000;
}

.react-datepicker__day--disabled,
.react-datepicker__month-text--disabled,
.react-datepicker__quarter-text--disabled,
.react-datepicker__year-text--disabled {
  cursor: default;
  color: #ccc;
}

.react-datepicker__day--disabled:hover,
.react-datepicker__month-text--disabled:hover,
.react-datepicker__quarter-text--disabled:hover,
.react-datepicker__year-text--disabled:hover {
  background-color: transparent;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.react-datepicker__input-container .react-datepicker__calendar-icon {
  position: absolute;
  padding: 0.5rem;
  box-sizing: content-box;
}

.react-datepicker__view-calendar-icon input {
  padding: 6px 10px 5px 25px;
}

.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
  position: relative;
}

.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}

.react-datepicker__year-read-view:hover
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover
  .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover
  .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover
  .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  transform: rotate(135deg);
  right: -16px;
  top: 0;
}

.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}

.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}

.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover {
  background-color: #ccc;
}

.react-datepicker__year-option:hover
  .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover
  .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover
  .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__year-option:hover
  .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover
  .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover
  .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

.react-datepicker__close-icon {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0 6px 0 0;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
}

.react-datepicker__close-icon::after {
  cursor: pointer;
  background-color: #216ba5;
  color: #fff;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  padding: 2px;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  content: "×";
}

.react-datepicker__close-icon--disabled {
  cursor: default;
}

.react-datepicker__close-icon--disabled::after {
  cursor: default;
  background-color: #ccc;
}

.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}

.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}

@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}

.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

.react-datepicker__children-container {
  width: 13.8rem;
  margin: 0.4rem;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  height: auto;
}

.react-datepicker__aria-live {
  position: absolute;
  clip-path: circle(0);
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
  white-space: nowrap;
}

.react-datepicker__calendar-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
}
</style>
<style>
body.react-confirm-alert-body-element {
  overflow: hidden;
}

.react-confirm-alert-blur {
  filter: url(#gaussian-blur);
  filter: blur(2px);
  -webkit-filter: blur(2px);
}

.react-confirm-alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(255, 255, 255, 0.9);
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  opacity: 0;
  -webkit-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -moz-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  -o-animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
  animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
}

.react-confirm-alert-body {
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  padding: 30px;
  text-align: left;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 75px rgba(0, 0, 0, 0.13);
  color: #666;
}

.react-confirm-alert-svg {
  position: absolute;
  top: 0;
  left: 0;
}

.react-confirm-alert-body > h1 {
  margin-top: 0;
}

.react-confirm-alert-body > h3 {
  margin: 0;
  font-size: 16px;
}

.react-confirm-alert-button-group {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
}

.react-confirm-alert-button-group > button {
  outline: none;
  background: #333;
  border: none;
  display: inline-block;
  padding: 6px 18px;
  color: #eee;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
}

@-webkit-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-o-keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes react-confirm-alert-fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
<style>
/* Slider */
.slick-slider {
  position: relative;

  display: block;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: none;
}

.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;

  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-track:before,
.slick-track:after {
  display: table;

  content: "";
}

.slick-track:after {
  clear: both;
}

.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
}

[dir="rtl"] .slick-slide {
  float: right;
}

.slick-slide img {
  display: block;
}

.slick-slide.slick-loading img {
  display: none;
}

.slick-slide.dragging img {
  pointer-events: none;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-loading .slick-slide {
  visibility: hidden;
}

.slick-vertical .slick-slide {
  display: block;

  height: auto;

  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}
</style>
<style>
/* Slider */
.slick-loading .slick-list {
  /* background: #fff url(/static/front/js/fb6f3c230cb846e25247dfaa1da94d8f.gif)
    center center no-repeat; */
}

/* Icons
@font-face {
  font-family: "slick";
  font-weight: normal;
  font-style: normal;

  src: url(/static/front/js/a4e97f5a2a64f0ab132323fbeb33ae29.eot);
  src: url(/static/front/js/a4e97f5a2a64f0ab132323fbeb33ae29.eot?#iefix)
      format("embedded-opentype"),
    url(/static/front/js/295183786cd8a138986521d9f388a286.woff) format("woff"),
    url(/static/front/js/c94f7671dcc99dce43e22a89f486f7c2.ttf)
      format("truetype"),
    url(/static/front/js/2630a3e3eab21c607e21576571b95b9d.svg#slick)
      format("svg");
} */

/* Arrows */
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}

.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}

.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: white;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}

[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}

.slick-prev:before {
  content: "←";
}

[dir="rtl"] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: -25px;
}

[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}

.slick-next:before {
  content: "→";
}

[dir="rtl"] .slick-next:before {
  content: "←";
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
}

.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}

.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}

.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}

.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}

.slick-dots li button:before {
  font-family: "slick";
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: "•";
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}
</style> -->
