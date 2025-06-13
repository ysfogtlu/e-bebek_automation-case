const { expect } = require('@playwright/test');

class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator('#lnkSignOutNavNode').or(page.locator('text=Çıkış Yap').first());
    this.loginButton = page.locator('a[href="/login"]').first();
  }

  async clickLogout() {
    await this.page.waitForLoadState('networkidle');
    
    await this.page.screenshot({ path: 'debug-before-logout.png', fullPage: true });
    
    await this.logoutButton.waitFor({ state: 'attached', timeout: 15000 });
    await this.logoutButton.waitFor({ state: 'visible', timeout: 15000 });
    
    await this.logoutButton.scrollIntoViewIfNeeded();
    await this.logoutButton.click({ force: true });
  }

  async verifySuccessfulLogout() {
    await expect(this.loginButton).toBeVisible({ timeout: 20000 });
    await this.page.waitForURL('https://www.e-bebek.com/', { timeout: 20000 });
  }
}

module.exports = { LogoutPage };