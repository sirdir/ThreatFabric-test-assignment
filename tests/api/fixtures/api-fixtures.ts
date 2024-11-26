import { test as base } from '@playwright/test';
import { ApiClient } from '../utils/api-client';

export interface APIFixtures {
  api: ApiClient;
}
export const test = base.extend<APIFixtures>({
  api: async ({ request }, use) => await use(new ApiClient(request)),
});
