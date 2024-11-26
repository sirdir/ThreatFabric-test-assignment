import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'always' }], ['list']],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://openlibrary.org/',
    extraHTTPHeaders: { 'User-Agent': 'Playwright/1.49.0 (phddir@gmail.com)' },
    screenshot: { mode: 'only-on-failure', fullPage: true },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: { mode: 'on', sources: true },
  },

  /* Configure projects for Chrome only */
  projects: [
    {
      name: 'chromium',
      testDir: './tests/ui',
      // UI of openlibrary is quite slow, so we need to increase the timeout for tests to pass
      timeout: 90000,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        trace: 'on',
        extraHTTPHeaders: { 'User-Agent': 'Playwright/1.49.0 (phddir@gmail.com)' },
      },
    },
    {
      name: 'api',
      dependencies: ['api-setup'],
      testDir: './tests/api',
      use: {
        trace: 'on',
        extraHTTPHeaders: { 'User-Agent': 'Playwright/1.49.0 (phddir@gmail.com)', 'Content-Type': 'application/json' },
      },
    },
    {
      name: 'api-setup',
      testMatch: /global\.api\.setup\.ts/,
      use: {
        trace: 'on',
        extraHTTPHeaders: { 'User-Agent': 'Playwright/1.49.0 (phddir@gmail.com)', 'Content-Type': 'application/json' },
      },
    },
  ],
});
