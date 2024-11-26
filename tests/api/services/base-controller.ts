import { APIRequestContext } from '@playwright/test';

export abstract class BaseController {
  readonly request: APIRequestContext;
  readonly coockie: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.coockie = process.env.COOKIE ?? '';
  }
}
