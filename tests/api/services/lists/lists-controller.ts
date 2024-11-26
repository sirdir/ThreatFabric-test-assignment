import listsEndpoints from './lists-endpoints';
import { validateAndParse } from '../../utils';
import { BaseController } from '../base-controller';

export class ListsController extends BaseController {
  private readonly endpoints = listsEndpoints;

  async createList(user: string, data: string | object, expectedStatus = 200) {
    const resp = await this.request.post(this.endpoints.createList(user), {
      headers: { 'Content-Type': `application/json`, cookie: this.coockie },
      data,
    });

    return validateAndParse(resp, expectedStatus);
  }

  async getList(user: string, listId: string, expectedStatus = 200) {
    const resp = await this.request.get(this.endpoints.getList(user, listId));

    return validateAndParse(resp, expectedStatus);
  }

  async updateList(user: string, listId: string, data: string | object, expectedStatus = 200) {
    const resp = await this.request.put(this.endpoints.updateList(user, listId), {
      headers: { 'Content-Type': `application/json`, cookie: this.coockie },
      data,
    });

    return validateAndParse(resp, expectedStatus);
  }

  async deleteList(user: string, listId: string, expectedStatus = 200) {
    const resp = await this.request.post(this.endpoints.deleteList(user, listId), {
      headers: { 'Content-Type': `application/json`, cookie: this.coockie },
    });

    return validateAndParse(resp, expectedStatus);
  }
}
