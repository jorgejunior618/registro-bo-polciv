import service from "../../services/registroBO.service";

export const CHANGE_FORM = 'CHANGE_FORM';
export const CLEAN_FORM = 'CLEAN_FORM';
export const SET_ORIGEM_DENUNCIA = 'SET_ORIGEM_DENUNCIA';

function changeForm(formData) {
  return {
    type: CHANGE_FORM,
    payload: formData,
  };
}

function cleanForm() {
  return {
    type: CLEAN_FORM,
  };
}

function setOrigemDenuncia(origemDenuncia) {
  return {
    type: SET_ORIGEM_DENUNCIA,
    payload: origemDenuncia,
  };
}

function createRegistro(form, alertCallBack) {
  return function (dispatch) {
    return service.createRegistro(form)
      .then(() => {
        dispatch(cleanForm());
        
        if(alertCallBack && typeof alertCallBack === 'function') {
          alertCallBack(true, 'Boletim de Ocorrência registrado com sucesso');
        }
      })
      .catch((error) => {
        
        if(alertCallBack && typeof alertCallBack === 'function') {
          alertCallBack(false, 'Erro ao registrar boletim');
        }
      });
  }
}

const boFormActions = {
  changeForm,
  cleanForm,
  setOrigemDenuncia,
  createRegistro,
}

export default boFormActions;

