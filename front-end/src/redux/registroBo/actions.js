import registroBOService from "../../services/registroBO.service";

export const SET_ORIGENS_LIST = 'SET_ORIGENS_LIST';

function setOrigensList(list) {
  return {
    type: SET_ORIGENS_LIST,
    payload: list ?? [],
  };
}
function getOrigensList() {
  return function (dispatch) {
    registroBOService.getOrigensDenuncia()
      .then((response) => {
        dispatch(setOrigensList(response.origensDenuncia));
      })
      .catch((error) => {
        alert('Ocorreu um erro ao carregar dados da página');
      });
  }
}

const registroActions = {
  getOrigensList,
}

export default registroActions;
