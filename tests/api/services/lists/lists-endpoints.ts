class ListsEndpoints {
  createList(user: string): string {
    return `/people/${user}/lists`;
  }

  getList(user: string, listId: string) {
    return `/people/${user}/lists/${listId}.json`;
  }

  updateList(user: string, listId: string): string {
    return `/people/${user}/lists/${listId}`;
  }
  deleteList(user: string, listId: string): string {
    return `/people/${user}/lists/${listId}/delete.json`;
  }
}

export default new ListsEndpoints();
