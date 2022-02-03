import * as actions from './actions';

const initialState = {
  origensList: [],
};

function registroBOReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ORIGENS_LIST:
      return {
        ...state,
        origensList: action.payload,
      };
  
    default:
      return state;
  }
}

export default registroBOReducer;
