import { APIResponse, expect } from '@playwright/test';

export const validateAndParse = async (response: APIResponse, expectedStatus: number) => {
  expect(response.status()).toBe(expectedStatus);

  return response.json();
};
