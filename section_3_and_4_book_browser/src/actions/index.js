export function selectBook(book) {
  // 'selectBook' is an ActionCreator, it needs to return an ActionCreator.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
