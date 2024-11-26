import { expect } from '@playwright/test';
import { test } from './fixtures';

test('Add and remove book from "Want to read" list', async ({ loginPage, bookPage, profilePage, wantToReadPage }) => {
  await test.step('user logs in', async () => {
    await loginPage.visit();
    await loginPage.loginAs(process.env.USER_EMAIL, process.env.PASSWORD);
    await loginPage.page.waitForURL('/people/loyar73933/books', { waitUntil: 'load' });
  });
  await test.step('user opens a desired book', async () => {
    await bookPage.visit('/works/OL257943W/A_Game_of_Thrones');
    await bookPage.addWantToRead();
  });

  await test.step('user navigates to "Want to read" list', async () => {
    await bookPage.header.openMyBooks();
    await profilePage.openWantToRead();
  });

  await test.step('validate that proper book was added to Want list', async () => {
    await expect(wantToReadPage.results.getResult(0).title).toHaveText(/A Game of Thrones/);
    await expect(wantToReadPage.results.getResult(0).author).toHaveText(/George R. R. Martin/);
  });

  await test.step('user removes book from the Want list', async () => {
    const responsePromise = wantToReadPage.page.waitForResponse(/\/bookshelves.json/);
    await wantToReadPage.results.getResult(0).myBooksDropper.clickCurrentAction();
    await responsePromise;
  });

  await test.step('validate that books was removed from Want list', async () => {
    await wantToReadPage.page.reload();
    await expect(wantToReadPage.results.parentElement).toHaveText(/You haven't added any books to this shelf yet./);
  });
});
