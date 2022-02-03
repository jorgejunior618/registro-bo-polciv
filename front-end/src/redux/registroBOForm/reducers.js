import * as actions from './actions';

const defaultForm = {
  origemDenunciaId: null,
  numeroOficio: '',
  orgao: '',
  arquivo: '',
  arquivoBase64: '',
  dataInicioAcontecimentos: '',
  horaInicioAcontecimentos: '',
  delegado: '',
  delegacia: '',
  restricaoDados: false,
}

const initialState = {
  form: defaultForm,
  origemDenuncia: {},
};

function boFormReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_FORM:
      return {
        ...state,
        form: action.payload,
      };

    case actions.CLEAN_FORM:
      return {
        ...state,
        form: defaultForm,
      };
  
    case actions.SET_ORIGEM_DENUNCIA:
      return {
        ...state,
        origemDenuncia: action.payload,
      };
  
    default:
      return state;
  }
}

export default boFormReducer;

