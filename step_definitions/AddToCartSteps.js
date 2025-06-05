const { When, Then } = require('@cucumber/cucumber');
const { AddToCartPage } = require('../pages/AddToCartPage');

When('Kullanıcı arama sonuçlarından ilk ürünü sepete ekler', async function () {
  this.addToCartPage = new AddToCartPage(this.page);
  await this.addToCartPage.addFirstProductToCart();
});

Then('Ürün sepete başarıyla eklenmelidir', async function () {
  await this.addToCartPage.verifyProductAdded();
});

When('Kullanıcı "Sepete Git" butonuna tıklar', async function () {
  await this.addToCartPage.goToCart();
});

Then('Sepet sayfası açılmalıdır', async function () {
  await this.addToCartPage.verifyCartPage();
});
