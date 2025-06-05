require('dotenv').config();

const { BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });
  this.browser = browser;
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};