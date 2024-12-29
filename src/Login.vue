<template>
  <div class="wrapper">
    <div class="login-page">
      <div class="login-box">
        <!-- Logo -->
        <div class="logo-login">
          <a href="/">
            <img
              src="https://sitethemedata.com/sitethemes/allpanelexch.com/front/logo.png"
              alt="Logo"
            />
          </a>
        </div>

        <!-- Login Form -->
        <div class="login-form mt-4">
          <h4 class="text-center login-title">
            Login <font-awesome-icon icon="hand-point-down" />
          </h4>
          <form>
            <!-- Username Input -->
            <div class="mb-4 input-group position-relative">
              <input
                name="username"
                type="text"
                class="form-control"
                placeholder="Username"
                autocomplete="off"
              />
              <span class="input-group-text">
                <font-awesome-icon icon="user" />
              </span>
            </div>

            <!-- Password Input -->
            <div class="mb-4 input-group position-relative">
              <input
                name="password"
                type="password"
                class="form-control"
                placeholder="Password"
                autocomplete="off"
              />
              <span class="input-group-text">
                <font-awesome-icon icon="key" />
              </span>
            </div>

            <!-- Buttons -->
            <div class="d-grid">
              <button type="submit" class="btn btn-primary btn-block">
                Login
                <font-awesome-icon icon="sign-in-alt" class="float-end mt-1" />
              </button>
              <button type="button" class="btn btn-primary btn-block mt-2">
                Login with demo ID
                <font-awesome-icon icon="sign-in-alt" class="float-end mt-1" />
              </button>
            </div>

            <!-- Recaptcha Terms -->
            <small class="recaptchaTerms mt-1">
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy" target="_blank"
                >Privacy Policy</a
              >
              and
              <a href="https://policies.google.com/terms" target="_blank"
                >Terms of Service</a
              >
              apply.
            </small>
          </form>
        </div>

        <!-- Footer -->
        <section class="footer footer-login">
          <div class="footer-top">
            <!-- Footer Links -->
            <div class="footer-links">
              <nav class="navbar navbar-expand-sm">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/terms-and-conditions"
                      target="_blank"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="/responsible-gaming"
                      target="_blank"
                    >
                      Responsible Gaming
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Support Detail -->
            <div class="support-detail">
              <h2>24X7 Support</h2>
              <p></p>
            </div>

            <!-- Social Icons -->
            <div class="social-icons-box"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
