import { test as base } from '@playwright/test';
import {
  AdvancedSearchPage,
  AuthorPage,
  BookPage,
  LoginPage,
  ProfilePage,
  SearchResultsPage,
  WantToReadPage,
} from '../pages';

type PageFixtures = {
  advancedSearchPage: AdvancedSearchPage;
  authorPage: AuthorPage;
  bookPage: BookPage;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  searchResultsPage: SearchResultsPage;
  wantToReadPage: WantToReadPage;
};

export const test = base.extend<PageFixtures>({
  advancedSearchPage: async ({ page }, use) => await use(new AdvancedSearchPage(page)),
  authorPage: async ({ page }, use) => await use(new AuthorPage(page)),
  bookPage: async ({ page }, use) => await use(new BookPage(page)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
  profilePage: async ({ page }, use) => await use(new ProfilePage(page)),
  searchResultsPage: async ({ page }, use) => await use(new SearchResultsPage(page)),
  wantToReadPage: async ({ page }, use) => await use(new WantToReadPage(page)),
});
