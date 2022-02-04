import * as actions from './actions';

const initialState = {
  origensList: [],
  nomesList: [],
};

function registroBOReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ORIGENS_LIST:
      return {
        ...state,
        origensList: action.payload,
      };
  
    case actions.SET_NOMES_LIST:
      return {
        ...state,
        nomesList: action.payload,
      };
  
    default:
      return state;
  }
}

export default registroBOReducer;
