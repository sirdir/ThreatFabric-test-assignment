class AuthorsEndpoints {
  getAuthor(authorKey: string): string {
    return `/authors/${authorKey}.json`;
  }
}

export default new AuthorsEndpoints();
