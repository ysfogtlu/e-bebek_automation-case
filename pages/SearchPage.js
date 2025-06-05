const { expect } = require('@playwright/test');

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#txtSearchBox');
  }

  async navigateToHomepage() {
    await this.page.goto('https://www.e-bebek.com/');
  }

  async searchForProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
  }

  async verifySearchResultsPage(productName) {
    await expect(this.page).toHaveURL(new RegExp(productName, 'i'), { timeout: 10000 });
  }

  async verifyProductInResults(productName) {
    await expect(this.page.locator('body')).toContainText(productName);
  }
}

module.exports = { SearchPage };
