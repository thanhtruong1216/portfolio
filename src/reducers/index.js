import * as Actions from '../actions';

const initialState = {
  messages: []
}

const reducers = (state = initialState, action) => {
  const { type, ...object } = action;
  switch(type) {
    case Actions.ADD_NEW_MESSAGE:
      return [...state, object];
    default:
      return state;
  }
}

export default reducers;