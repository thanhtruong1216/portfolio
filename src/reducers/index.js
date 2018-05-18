import * as Actions from '../actions';

const initialState = {
  react: {
    name: 'React',
    title: "This is my app"
  }
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case Actions.LOAD_SINGLE_PROJECT:
      return {};
    default:
      return state;
  }
}

export default reducers;