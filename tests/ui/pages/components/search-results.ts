import { Locator } from '@playwright/test';
import { SearchResult } from './search-result';

export class SearchResults {
  readonly parentElement: Locator;
  readonly results: Locator;

  constructor(parentElement: Locator) {
    this.parentElement = parentElement;
    this.results = parentElement.locator('.searchResultItem');
  }

  getResult(index: number): SearchResult {
    const locator = this.results.nth(index);
    return new SearchResult(locator);
  }
}
