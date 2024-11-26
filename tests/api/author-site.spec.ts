import { expect } from '@playwright/test';
import { test } from './fixtures';

const ARR = [
  { author: 'rowling', query: 'harry potter', sites: ['http://www.jkrowling.com/'] },
  {
    author: 'tolkien',
    query: 'hobbit',
    sites: [
      'http://www.tolkiensociety.org/index.html',
      'http://www.tolkienestate.com/',
      'http://www.theonering.com/',
      'http://www.planet-tolkien.com/',
      'http://www.tolkienlibrary.com/',
    ],
  },
  {
    author: 'dahl',
    query: 'chocolate factory',
    sites: ['http://www.roalddahl.com/', 'http://en.wikipedia.org/wiki/Roald_Dahl'],
  },
];

ARR.forEach(({ author, query, sites }) => {
  test(`Validate that for author ${author} official site(s) is ${sites}`, async ({ api }) => {
    let author_key: string;
    await test.step('search by author and title', async () => {
      const searchResults = await api.search.searchByQueryAndAuthor(query, author);
      author_key = searchResults.docs[0].author_key;
    });

    await test.step('validate author sites', async () => {
      const authorResult = await await api.authors.getAuthor(author_key);
      const links = authorResult.links.map((link) => link.url);
      expect(links).toEqual(expect.arrayContaining(sites));
    });
  });
});
