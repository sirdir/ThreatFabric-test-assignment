import authorsEndpoints from './authors-endpoints';
import { validateAndParse } from '../../utils';
import { BaseController } from '../base-controller';

export class AuthorsController extends BaseController {
  private readonly endpoints = authorsEndpoints;

  async getAuthor(authorkey: string, expectedStatus = 200) {
    const resp = await this.request.get(this.endpoints.getAuthor(authorkey));

    return validateAndParse(resp, expectedStatus);
  }
}
