import { Locator } from '@playwright/test';

export class SideMenu {
  readonly myBooks: Locator;

  constructor(protected parentElement: Locator) {
    this.myBooks = parentElement.getByRole('link', { name: 'My Books' });
  }

  async openMyBooks(): Promise<void> {
    await this.myBooks.click();
  }
}
