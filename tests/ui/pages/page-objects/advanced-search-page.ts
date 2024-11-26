import { Locator, Page } from '@playwright/test';
import type { AdvancedSearchForm } from '../../interfaces';
import { BasePage } from '../base-page';

export class AdvancedSearchPage extends BasePage {
  readonly title: Locator;
  readonly author: Locator;
  readonly isbn: Locator;
  readonly subject: Locator;
  readonly place: Locator;
  readonly person: Locator;
  readonly publisher: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    super(page, '/advancedsearch');
    this.title = page.locator('#qtop-title');
    this.author = page.locator('#qtop-author');
    this.isbn = page.locator('#qtop-isbn');
    this.subject = page.locator('#qtop-subject');
    this.place = page.locator('#qtop-place');
    this.person = page.locator('#qtop-person');
    this.publisher = page.locator('#qtop-publisher');
    this.submit = page.getByRole('button', { name: 'Search', exact: true });
  }

  async search(searchData: AdvancedSearchForm): Promise<void> {
    if (searchData.title) {
      await this.title.fill(searchData.title);
    }
    if (searchData.author) {
      await this.author.fill(searchData.author);
    }
    if (searchData.isbn) {
      await this.isbn.fill(searchData.isbn);
    }
    if (searchData.subject) {
      await this.subject.fill(searchData.subject);
    }
    if (searchData.place) {
      await this.place.fill(searchData.place);
    }
    if (searchData.person) {
      await this.person.fill(searchData.person);
    }
    if (searchData.publisher) {
      await this.publisher.fill(searchData.publisher);
    }
    await this.submit.click();
  }
}
