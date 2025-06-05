const { Given, When, Then } = require('@cucumber/cucumber');
const { SearchPage } = require('../pages/SearchPage');

Given('Kullanıcı arama yapmak için ana sayfayı açar', async function () {
  this.searchPage = new SearchPage(this.page);
  await this.searchPage.navigateToHomepage();
});

When('Kullanıcı arama kutusuna {string} yazar ve enter tuşuna basar', async function (productName) {
  await this.searchPage.searchForProduct(productName);
});

Then('Arama sonuçları sayfası açılır ve URL {string} kelimesini içerir', async function (productName) {
  await this.searchPage.verifySearchResultsPage(productName);
});

Then('Arama sonuçlarında {string} kelimesi görünür', async function (productName) {
  await this.searchPage.verifyProductInResults(productName);
});