import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registroActions from '../../redux/registroBo/actions';
import boFormActions from '../../redux/registroBOForm/actions';

import { FormContainer } from "./styles";

function BORegister() {
  const {
    registroBO: boState,
    registroBOForm: boFormState
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getOrigensDenuncia = useCallback(
    () => dispatch(registroActions.getOrigensList()),
    [dispatch]
  );

  const updateForm = useCallback(
    (value) => dispatch(boFormActions.changeForm({
      ...boFormState,
      ...value,
    })),
    [dispatch, boFormState]
  )

  useEffect(() => {
    getOrigensDenuncia();
  }, [getOrigensDenuncia]);

  return (
    <FormContainer>
      <form aria-label="form" action="submit">
        <h1>Registro Boletim de Ocorrência</h1>
        <section aria-label=''></section>
      </form>
    </FormContainer>
  );
}

export default BORegister;
