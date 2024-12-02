import { test as setup } from '@playwright/test';

setup('Getting and setting auth Cookie', async ({ request }) => {
  if (process.env.USER_EMAIL && process.env.USER_PASSWORD) {
    const loginResponse = await request.post(`/account/login`, {
      data: { access: process.env.ACCESS_KEY, secret: process.env.SECRET_KEY },
      failOnStatusCode: true,
    });

    const cookie = loginResponse.headers()['set-cookie'];
    if (cookie) {
      process.env.COOKIE = cookie;
      console.log('COOKIE was set to:', cookie);
    } else {
      throw new Error('COOKIE was NOT set correctly. Make sure credentials are correct.');
    }
  } else {
    throw new Error(
      'USER_EMAIL or USER_PASSWORD is missing from .env file or haven`t been set in GitHub Actions secrets' +
        '\n Make sure you have created the file in your project root directory with correct credentials. ' +
        '\n' +
        '\n IMPORTANT: IF there is no need to logIn:' +
        '\n Remove the "api-setup" project form "playwright.config.ts"',
    );
  }
});
