const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    // Daha spesifik locator
    this.loginButton = page.locator('a[href="/login"]').first();
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#Password');
    this.submitButton = page.locator('button[type="submit"]');
    this.userMenu = page.locator('.user-menu');
  }

  async navigateToHomepage() {
    await this.page.goto('https://www.e-bebek.com', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async goToLoginPage() {
    await this.page.goto('https://www.e-bebek.com/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async clickEmailTab() {
  await this.page.locator('#btnLoginWithEmail').click(); // Doğrudan ID ile
}

async enterEmail(email) {
  const emailInput = this.page.locator('#txtEmail');
  await emailInput.fill(email);
}

async clickContinueAfterEmail() {
  const continueBtn = this.page.locator('button:has-text("Giriş Yap / Hesap Oluştur")');
  await continueBtn.waitFor({ state: 'visible', timeout: 5000 });
  await continueBtn.click();
}

async enterPassword(password) {
  const passwordInput = this.page.locator('#txtPassword');
  await passwordInput.waitFor({ state: 'visible', timeout: 5000 });
  await passwordInput.fill(password);
}

async clickLoginAfterPassword() {
  const loginBtn = this.page.locator('button:has-text("Giriş Yap")');
  await loginBtn.waitFor({ state: 'visible', timeout: 5000 });
  await loginBtn.click();
}

  async verifySuccessfulLogin() {
    await this.page.goto('https://www.e-bebek.com', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }
}

module.exports = { LoginPage };