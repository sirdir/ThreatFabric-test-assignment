import { test } from './fixtures';
import { expect } from '@playwright/test';

test.describe('Tests for Lists', () => {
  test.describe.configure({ mode: 'serial' });
  const USER = 'loyar73933';
  let listId: string;

  test('create a list', async ({ api }) => {
    const data = { name: 'My List', description: 'My List Description' };
    const responseBody = await api.lists.createList(USER, data);

    expect(responseBody).toMatchObject({ key: expect.any(String), revision: 1 });

    listId = responseBody.key.split(`/people/${USER}/lists/`)[1];
  });

  test('read a list', async ({ api }) => {
    const listResponse = await api.lists.getList(USER, listId);

    expect(listResponse).toMatchObject({
      links: {
        self: `/people/${USER}/lists/${listId}`,
        seeds: `/people/${USER}/lists/${listId}/seeds`,
        subjects: `/people/${USER}/lists/${listId}/subjects`,
        editions: `/people/${USER}/lists/${listId}/editions`,
      },
      name: 'My List',
      type: { key: `/people/${USER}/lists/${listId}` },
      description: 'My List Description',
      seed_count: 0,
      meta: {
        revision: 1,
        created: expect.any(String),
        last_modified: expect.any(String),
      },
    });
  });

  // not implemented according to the documentation https://openlibrary.org/dev/docs/api/lists#update-list
  // that is why test marked with `fail` annotaion
  test.fail('update a list', async ({ api }) => {
    const updatedData = {
      name: '18th Century Architecture',
      description: 'Studies of architectural practice, mainly English works',
    };
    const updateResponse = await api.lists.updateList(USER, listId, updatedData);

    expect(updateResponse.ok()).toBeTruthy();
  });

  // bug in documentation https://openlibrary.org/dev/docs/api/lists#delete-list
  // url path is wrong `/list/` instead of valid `/lists/`
  test('delete a list', async ({ api }) => {
    const deleteResponse = await api.lists.deleteList(USER, listId);

    expect(deleteResponse).toMatchObject({ status: 'ok' });
  });
});
