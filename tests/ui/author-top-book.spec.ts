import { expect } from '@playwright/test';
import { test } from './fixtures';
import { SortType } from './enums';

const writers = [
  { author: 'rowling', title: 'harry potter', topBook: /Harry Potter and the Prisoner of Azkaban/ },
  { author: 'tolkien', title: 'hobbit', topBook: /The Lord of the Rings/ },
  { author: 'dahl', title: 'chocolate factory', topBook: /Matilda/ },
];

writers.forEach(({ author, title, topBook }) => {
  test(`the book "${topBook}" should be the top rated one for ${author}`, async ({
    advancedSearchPage,
    searchResultsPage,
    authorPage,
  }) => {
    // `tolkien` test is quite slow, so we need to increase the timeout
    test.setTimeout(60_000);

    await test.step('user make advanced search', async () => {
      await advancedSearchPage.visit();
      await advancedSearchPage.search({ title, author });
      await searchResultsPage.page.waitForURL('/search?**', { waitUntil: 'load' });
    });

    await test.step('user opens author page', async () => {
      await searchResultsPage.results.getResult(0).openAuthor();
      await authorPage.page.waitForURL('/authors/**', { waitUntil: 'load' });
    });

    await test.step('user sort all author books by rating', async () => {
      await authorPage.sortBy(SortType.TOP_RATED);
    });

    await test.step(`validate that top #1 book is "${topBook}"`, async () => {
      await expect(authorPage.searchResults.getResult(0).title).toHaveText(topBook);
    });
  });
});
