const { Given, When, Then } = require('@cucumber/cucumber');
const { LogoutPage } = require('../pages/LogoutPage');
const { LoginPage } = require('../pages/LoginPage');

Given('Kullanıcı giriş yapmış durumda', async function () {
});

When('Kullanıcı çıkış yap butonuna tıklar', async function () {
  await this.page.goto('https://www.e-bebek.com/account', { waitUntil: 'networkidle' });
  await this.logoutPage.clickLogout();
});

Then('Kullanıcı çıkış yaptığını doğrular', async function () {
  await this.logoutPage.verifySuccessfulLogout();
});