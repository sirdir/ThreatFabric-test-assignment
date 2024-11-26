import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class ProfilePage extends BasePage {
  readonly wantToRead: Locator;

  constructor(page: Page) {
    super(page);
    this.wantToRead = page.locator('[data-ol-link-track="MyBooksSidebar|WantToRead"]');
  }

  async openWantToRead() {
    await this.wantToRead.click();
  }
}
