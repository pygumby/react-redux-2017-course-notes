// 'state' argument is not the application state, it's the state previously produced by this reducer.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
