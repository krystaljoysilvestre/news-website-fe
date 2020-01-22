import initialState from './initialState';

export default (state = initialState.news, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      return Object.assign({}, state, action.payload);

    case 'FETCH_ARTICLES_BY_CATEGORY':
      return Object.assign({}, state, action.payload);

    case 'FETCH_ARTICLES_BY_SOURCE':
      return Object.assign({}, state, action.payload);

    case 'FETCH_SOURCES':
      return Object.assign({}, state, action.payload);

    case 'SEARCH_ARTICLES':
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}