export const CHANGE_FORM = 'CHANGE_FORM';
export const CLEAN_FORM = 'CLEAN_FORM';

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

const boFormActions = {
  changeForm,
  cleanForm,
}

export default boFormActions;

