const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const TestPage = require('../../pages/testpage.page');


Given('I want to test the test page', async function () {
  this.testPage = new TestPage(this.page);
  await this.testPage.navigateTestPage();
});

When('I navigate to the test page url', async function () {
  await this.testPage.loginContainer.waitFor({ state: 'visible' });
});

Then('I should see the test page', async function () {
  await expect(this.testPage.loginContainer).toBeVisible({ timeout: 10_000 });
});

Given('I am on the login test page', async function () {
  this.testPage = new TestPage(this.page);
  await this.testPage.navigateTestPage();
});

When('I enter username {string} and password {string} and click the Login button', 
  async function (username, password) {
  await this.testPage.loginEnterCredentials(username,password);
});

Then('I should be redirected to the dashboard', async function () {
  await expect(this.testPage.standardUserCheck).toBeVisible({ timeout: 10_000 });
  // const error = this.page.locator('.error-message-container');
  // await expect(error).toBeVisible({ timeout: 5000 });
  // await expect(error).toContainText(message);
});

