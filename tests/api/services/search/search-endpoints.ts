class SearchEndpoints {
  searchByQueryAndAuthor(query: string, author: string): string {
    return `/search.json?q=${query}&author=${author}`;
  }
}

export default new SearchEndpoints();
