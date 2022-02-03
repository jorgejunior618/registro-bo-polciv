import Immutable from 'seamless-immutable';
import * as actions from './actions';

const defaultForm = {
  origemDenunciaId: 1,
  numeroOficio: '',
  orgao: '',
  arquivo: '',
  dataInicioAcontecimentos: '',
  delegado: '',
  delegacia: '',
  restricaoDados: false,
}

const initialState = () => Immutable({ form: defaultForm });

function boFormReducer(state = initialState(), action) {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return state.set('form', action.payload);

    case actions.CLEAN_FORM:
      return state.set('form', defaultForm);
  
    default:
      return state;
  }
}

export default boFormReducer;
