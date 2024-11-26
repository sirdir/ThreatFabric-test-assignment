import { Page } from '@playwright/test';
import { Header } from './components';
import { SideMenu } from './components';

export abstract class BasePage {
  readonly page: Page;
  readonly url: string;
  readonly header: Header;
  readonly sideMenu: SideMenu;

  constructor(page: Page, url = '') {
    this.page = page;
    this.url = url;
    this.header = new Header(page.locator('#header-bar'));
    this.sideMenu = new SideMenu(page.getByAltText('.hamburger-dropdown-menu'));
  }

  async visit(url?: string): Promise<void> {
    await this.page.goto(this.url || url, { waitUntil: 'load' });
  }
}
