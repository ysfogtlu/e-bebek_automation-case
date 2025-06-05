const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

Given('Kullanıcı e-bebek ana sayfasını açar', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToHomepage();
});

When('Kullanıcı giriş sayfasına gider', async function () {
  await this.loginPage.goToLoginPage();
});

When('Kullanıcı e-posta ile giriş yap sekmesine tıklar', async function () {
  await this.loginPage.clickEmailTab();
});

When('Kullanıcı geçerli e-posta adresini girer', async function () {
  await this.loginPage.enterEmail(process.env.TEST_EMAIL);
});

When('Kullanıcı e-posta giriş butonuna tıklar', async function () {
  await this.loginPage.clickContinueAfterEmail();
});

When('Kullanıcı geçerli şifreyi girer', async function () {
  await this.loginPage.enterPassword(process.env.TEST_PASSWORD);
});

When('Kullanıcı şifre giriş butonuna tıklar', async function () {
  await this.loginPage.clickLoginAfterPassword();
});

Then('Kullanıcı başarılı bir şekilde giriş yaptığını doğrular', async function () {
  await this.loginPage.verifySuccessfulLogin();
});