import searchEndpoints from './search-endpoints';
import { validateAndParse } from '../../utils';
import { BaseController } from '../base-controller';

export class SearchController extends BaseController {
  private readonly endpoints = searchEndpoints;

  async searchByQueryAndAuthor(query: string, author: string, expectedStatus = 200) {
    const resp = await this.request.get(this.endpoints.searchByQueryAndAuthor(query, author));

    return validateAndParse(resp, expectedStatus);
  }
}
