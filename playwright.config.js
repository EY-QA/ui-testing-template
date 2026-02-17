// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.test.com/',   // value is never used
    headless: false,
    actionTimeout: 0,                    // no limit for actions
    trace: 'on-first-retry',             // collect traces on first retry
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
});
``