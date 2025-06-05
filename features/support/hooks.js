require('dotenv').config();
const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;

// Genel timeout süresini artırın
setDefaultTimeout(120 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 100,
  });
});

Before({ tags: '@auth' }, async function () {
  this.page = await browser.newPage();
  this.page.setDefaultTimeout(60000);

  // Page objelerini initialize et
  const { LoginPage } = require('../../pages/LoginPage');
  const { LogoutPage } = require('../../pages/LogoutPage');
  
  this.loginPage = new LoginPage(this.page);
  this.logoutPage = new LogoutPage(this.page);

  await this.loginPage.navigateToHomepage();
  await this.loginPage.goToLoginPage();
  await this.loginPage.clickEmailTab();
  await this.loginPage.enterEmail(process.env.TEST_EMAIL);
  await this.loginPage.clickContinueAfterEmail();
  await this.loginPage.enterPassword(process.env.TEST_PASSWORD);
  await this.loginPage.clickLoginAfterPassword();
  await this.loginPage.verifySuccessfulLogin();
});

// Diğer tüm senaryolarda sadece sayfa aç
Before({ tags: 'not @auth' }, async function () {
  this.page = await browser.newPage();
  this.page.setDefaultTimeout(60000);
  
  // Tüm senaryolar için page objelerini initialize et
  const { LoginPage } = require('../../pages/LoginPage');
  const { LogoutPage } = require('../../pages/LogoutPage');
  
  this.loginPage = new LoginPage(this.page);
  this.logoutPage = new LogoutPage(this.page);
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  await this.page.close();
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});