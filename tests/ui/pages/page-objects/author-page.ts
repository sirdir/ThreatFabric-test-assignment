import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { SearchResults } from '../components';
import { SortType } from '../../enums';

export class AuthorPage extends BasePage {
  readonly searchResults: SearchResults;
  readonly sortDropper: Locator;

  constructor(page: Page) {
    super(page);
    this.searchResults = new SearchResults(page.locator('#searchResults'));
    this.sortDropper = page.locator('#books .sort-dropper');
  }

  async sortBy(sortType: SortType) {
    await this.sortDropper.click();

    await this.sortDropper.getByRole('link', { name: sortType }).click();
  }
}
