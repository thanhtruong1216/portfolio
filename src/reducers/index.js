import * as Actions from '../actions';

const initialState = {
  motherDay: {
    name: 'Happy Mother day',
    title: "Mother's day is important day..."
  }
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case Actions.LOAD_SINGLE_NEWS:
      return {};
    default:
      return state;
  }
}

export default reducers;