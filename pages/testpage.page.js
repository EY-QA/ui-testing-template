
class TestPage {
  constructor(page) {
    this.page = page;
    this.loginContainer = this.page.locator('[data-test="login-container"]');
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]'); 
    this.standardUserCheck = this.page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');
  }

  async navigateTestPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginEnterCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  
}
module.exports = TestPage;
