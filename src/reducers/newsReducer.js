import initialState from './initialState';

export default (state = initialState.news, action) => {
  switch (action.type) {
    case 'SET_ACTION':
      return {
        result: action.payload
      };

    default:
      return state
  }
}