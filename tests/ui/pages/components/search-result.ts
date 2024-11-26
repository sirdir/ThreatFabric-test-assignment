import { Locator } from '@playwright/test';
import { BooksDropper } from './books-dropper';

export class SearchResult {
  readonly author: Locator;
  readonly title: Locator;
  readonly myBooksDropper: BooksDropper;

  constructor(parentrElement: Locator) {
    this.author = parentrElement.locator('[itemprop="author"] > a');
    this.title = parentrElement.locator('[itemprop="name"] > a');
    this.myBooksDropper = new BooksDropper(parentrElement.locator('.my-books-dropper'));
  }

  async openAuthor(): Promise<void> {
    await this.author.click();
  }
}
