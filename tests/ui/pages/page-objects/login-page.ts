import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base-page';

export class LoginPage extends BasePage {
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    super(page, '/account/login');
    this.email = page.locator('#username');
    this.password = page.locator('#password');
    this.submit = page.getByRole('button', { name: 'Log In' });
  }

  async loginAs(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}
