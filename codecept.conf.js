//const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
//setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://the-internet.herokuapp.com/basic_auth',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0",
      basicAuth: {username: 'admin', password: 'admin'}
    }
  },
  include: {
    I: './steps_file.js',
    ImagesPage: './tests/pages/checkImg.page.js',
    HoverPage: './tests/pages/hover.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 's2-demo',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}