import { AuthorsController, ListsController, SearchController } from '../services';
import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  readonly authors: AuthorsController;
  readonly lists: ListsController;
  readonly search: SearchController;

  constructor(readonly request: APIRequestContext) {
    this.authors = new AuthorsController(request);
    this.lists = new ListsController(request);
    this.search = new SearchController(request);
  }
}
