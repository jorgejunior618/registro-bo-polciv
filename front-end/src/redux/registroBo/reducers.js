import Immutable from 'seamless-immutable';
import * as actions from './actions';

const initialState = () => Immutable({
  origensList: [],
});

function registroBOReducer(state = initialState(), action) {
  switch (action.type) {
    case actions.SET_ORIGENS_LIST:
      return state.set('origensList', action.payload);
  
    default:
      return state;
  }
}

export default registroBOReducer;
