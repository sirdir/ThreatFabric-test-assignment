import { Locator } from '@playwright/test';
import { ReadStatus } from '../../enums';

export class BooksDropper {
  readonly arrowDown: Locator;
  readonly currentAction: Locator;
  readonly readStatuses: Locator;

  constructor(parentrElement: Locator) {
    this.arrowDown = parentrElement.locator('.generic-dropper__dropclick');
    this.currentAction = parentrElement.locator('.generic-dropper__primary');
    this.readStatuses = parentrElement.locator('.read-statuses');
  }

  async openDropper() {
    await this.arrowDown.click();
  }

  async selectReadStatus(status: ReadStatus) {
    await this.readStatuses.getByRole('button', { name: status }).click();
  }

  async clickCurrentAction() {
    await this.currentAction.click();
  }
}
