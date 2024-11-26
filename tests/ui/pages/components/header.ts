import { Locator } from '@playwright/test';

export class Header {
  readonly myBooks: Locator;
  readonly searchType: Locator;
  readonly search: Locator;

  constructor(protected parentElement: Locator) {
    this.myBooks = parentElement.getByRole('link', { name: 'My Books' });
    this.searchType = parentElement.getByLabel('Search by', { exact: true });
    this.search = parentElement.getByPlaceholder('Search');
  }

  async openMyBooks(): Promise<void> {
    await this.myBooks.click();
  }
}
