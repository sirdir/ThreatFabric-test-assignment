import { test } from './fixtures';
import { expect } from '@playwright/test';

test.describe('Tests for Lists', () => {
  test.describe.configure({ mode: 'serial' });
  const user = process.env.USER_NAME;
  let listId: string;

  test('create a list', async ({ api }) => {
    const data = { name: 'My List', description: 'My List Description' };
    const responseBody = await api.lists.createList(user, data);

    expect(responseBody).toMatchObject({ key: expect.any(String), revision: 1 });

    listId = responseBody.key.split(`/people/${user}/lists/`)[1];
  });

  test('read a list', async ({ api }) => {
    const listResponse = await api.lists.getList(user, listId);

    expect(listResponse).toMatchObject({
      links: {
        self: `/people/${user}/lists/${listId}`,
        seeds: `/people/${user}/lists/${listId}/seeds`,
        subjects: `/people/${user}/lists/${listId}/subjects`,
        editions: `/people/${user}/lists/${listId}/editions`,
      },
      name: 'My List',
      type: { key: `/people/${user}/lists/${listId}` },
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
    const updateResponse = await api.lists.updateList(user, listId, updatedData);

    expect(updateResponse.ok()).toBeTruthy();
  });

  // bug in documentation https://openlibrary.org/dev/docs/api/lists#delete-list
  // url path is wrong `/list/` instead of valid `/lists/`
  test('delete a list', async ({ api }) => {
    const deleteResponse = await api.lists.deleteList(user, listId);

    expect(deleteResponse).toMatchObject({ status: 'ok' });
  });
});
