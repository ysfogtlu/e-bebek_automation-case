const { expect } = require('@playwright/test');

class AddToCartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('button#addToCartBtn');
    this.goToCartButton = page.locator('a#btnShowCart');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.first().click();
  }

  async verifyProductAdded() {
    await expect(this.goToCartButton).toBeVisible({ timeout: 10000 });
  }

  async goToCart() {
    await this.goToCartButton.click();
  }

  async verifyCartPage() {
    await expect(this.page).toHaveURL(/\/cart/);
  }
}

module.exports = { AddToCartPage };
