import { Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { SearchResults } from '../components';

export class WantToReadPage extends BasePage {
  readonly results: SearchResults;

  constructor(page: Page) {
    super(page);
    this.results = new SearchResults(page.locator('.list-books'));
  }
}
