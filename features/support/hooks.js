const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(10_000);
let browser;

BeforeAll(async function () {
  const channel = process.env.PW_BROWSER_CHANNEL || 'msedge'; // default to Edge
  const headless = false; //using headless browser

  console.log(`[hooks] Launching Playwright with channel=${channel}, headless=${headless}`);
  browser = await chromium.launch({ channel, headless });
});

AfterAll(async function () {
  await browser?.close();
});

Before(async function () {
  if (!browser) throw new Error('Playwright browser not initialized in BeforeAll.');
  this.browser = browser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
    // Ensure "screenshots" folder exists
    const dir = path.join(process.cwd(), 'screenshots');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const fileName = scenario.pickle.name.replace(/ /g, '_') + '.png';
    await this.page.screenshot({
      path: `${dir}/${fileName}`,
      fullPage: true
    });
    console.log(`📸 Screenshot saved: screenshots/${fileName}`);
  }

  await this.page?.close();
  await this.context?.close();
});
