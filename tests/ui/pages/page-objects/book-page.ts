import { Page } from '@playwright/test';
import { BasePage } from '../base-page';
import { BooksDropper } from '../components';

export class BookPage extends BasePage {
  readonly myBooksDropper: BooksDropper;

  constructor(page: Page) {
    super(page);
    this.myBooksDropper = new BooksDropper(page.locator('#read-options .my-books-dropper'));
  }

  async addWantToRead() {
    await this.myBooksDropper.currentAction.click();
  }
}
