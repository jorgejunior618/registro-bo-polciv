import registroBOService from "../../services/registroBO.service";

export const SET_ORIGENS_LIST = 'SET_ORIGENS_LIST';
export const SET_NOMES_LIST = 'SET_NOMES_LIST';

function setOrigensList(list) {
  return {
    type: SET_ORIGENS_LIST,
    payload: list ?? [],
  };
}

function setNomesList(list) {
  return {
    type: SET_NOMES_LIST,
    payload: list ?? [],
  };
}

function getOrigensList(alertCallBack) {
  return function (dispatch) {
    registroBOService.getOrigensDenuncia()
      .then((response) => {
        dispatch(setOrigensList(response.origensDenuncia));
      })
      .catch((error) => {
        if(alertCallBack && typeof alertCallBack === 'function') {
          alertCallBack(false, 'Ocorreu um erro ao carregar dados da página');
        }
      });
  }
}

function getNomesList(alertCallBack) {
  return function (dispatch) {
    registroBOService.getNomes()
      .then((response) => {
        dispatch(setNomesList(response));
      })
      .catch((error) => {
        if(alertCallBack && typeof alertCallBack === 'function') {
          alertCallBack(false, 'Ocorreu um erro ao carregar dados da página');
        }
      });
  }
}

const registroActions = {
  getOrigensList,
  getNomesList,
}

export default registroActions;
