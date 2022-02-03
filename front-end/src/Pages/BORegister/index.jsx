import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registroActions from '../../redux/registroBo/actions';
import boFormActions from '../../redux/registroBOForm/actions';

import {
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';

import { FormContainer, InputContainer, InputGroup } from "./styles";
import CustomWidthInput from '../../components/CustomWidthInput';
import { fileToBase64 } from '../../utils/file.util';
import InputMask from '../../components/InputMask';

function BORegister() {
  const {
    registroBO: boState,
    registroBOForm: boFormState
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ showAlert, setShowAlert ]= useState();

  const getOrigensDenuncia = useCallback(
    () => {
      dispatch(registroActions.getOrigensList());
    },
    [dispatch]
  );

  const updateForm = useCallback(
    (value) => {
      dispatch(boFormActions.changeForm({
        ...boFormState.form,
        ...value,
      }));
    },
    [dispatch, boFormState]
  );

  const updateOrigemDenuncia = useCallback(
    (origemID) => {
      const origemDenuncia = boState.origensList.find((origem) => {
        return origem.id === origemID;
      })
      dispatch(boFormActions.setOrigemDenuncia(origemDenuncia));
    },
    [dispatch, boState]
  );

  const createRegistro = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(boFormActions.createRegistro(boFormState.form, handleOpen))
      
    },
    [dispatch, boFormState]
  );

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    const newValue = {};
    newValue[name] = value;
    
    updateForm(newValue);
  }

  const handleClose = () => {
    setShowAlert(false);
  }
  const handleOpen = () => {
    setShowAlert(true);
  }

  useEffect(() => {
    getOrigensDenuncia();
    handleOpen();
  }, [getOrigensDenuncia]);

  return (
    <FormContainer>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          CARALHO
        </Alert>
      </Snackbar>

      <form aria-label="form" action="submit" onSubmit={createRegistro}>
        <h1>Registro Boletim de Ocorrência</h1>

        <InputContainer aria-label='origem-denuncia'>
          <FormLabel className="label-input">
            Origem da Denúncia: 
          </FormLabel>
          <RadioGroup
            row
            value={boFormState.form.origemDenunciaId}
            onChange={(event, value) => {
              updateForm({origemDenunciaId: Number(value)});
              updateOrigemDenuncia(Number(value));
            }}
          >
            {boState.origensList.map((origem) => {
              return (
                <FormControlLabel
                  key={origem.id}
                  value={origem.id}
                  control={<Radio />} 
                  label={origem.descricao}
                />
              );
            })}
          </RadioGroup>
        </InputContainer>

        {boFormState.origemDenuncia.aceitaoficio ?
          (
            <InputGroup>
              <InputContainer aria-label='oficio'>
                <FormLabel className="label-input">
                  Nº do Ofício: 
                </FormLabel>
                <CustomWidthInput
                  width='160px'
                  required
                  fullWidth
                  value={boFormState.form.numeroOficio}
                  name="numeroOficio"
                  onChange={(event) => handleChangeInput(event)}
                  placeholder="Ex.: 99/TJCE"
                  />
              </InputContainer>
                
              <InputContainer aria-label='oficio'>
                <FormLabel className="label-input">
                  Órgão: 
                </FormLabel>
                <CustomWidthInput
                  required
                  width='300px'
                  value={boFormState.form.orgao}
                  name="orgao"
                  onChange={(event) => handleChangeInput(event)}
                  placeholder="Nome do órgão emissor por extenso"
                />
              </InputContainer>
            </InputGroup>
          ) :
          <></>
        }
        {boFormState.origemDenuncia.aceitaarquivo ?
          (
            <InputContainer aria-label='arquivo'>
              <input
                accept=".pdf, .doc, .docx"
                value={boFormState.form.arquivo}
                onChange={async (event) => {
                  const arquivoBase64 = await fileToBase64(event.target.files[0]);

                  updateForm({
                    arquivo: event.target.value,
                    arquivoBase64: arquivoBase64.split(',')[1],
                  });
                }}
                id="contained-button-file"
                multiple={false}
                type="file"
              />   
            </InputContainer>
          ) :
          <></>
        }

        <InputGroup>
          <InputContainer>
            <FormLabel className="label-input">
              Inicio dos Acontecimentos: 
            </FormLabel>

            <div style={{ width: '120px', marginRight: '20px'}}>
              <InputMask
                aria-label="dataInicioAcontecimentos"
                value={boFormState.form.dataInicioAcontecimentos}
                name="dataInicioAcontecimentos"
                mask="99/99/9999"
                maskChar={null}
                onChange={(event) => handleChangeInput(event)}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div style={{ width: '100px'}}>
              <InputMask
                aria-label="horaInicioAcontecimentos"
                value={boFormState.form.horaInicioAcontecimentos}
                name="horaInicioAcontecimentos"
                mask="99:99"
                maskChar={null}
                onChange={(event) => handleChangeInput(event)}
                placeholder="hh:ss"
              />
            </div>
          </InputContainer>
        </InputGroup>

        <InputContainer aria-label='DelegadoResponsavel'>
          <FormLabel className="label-input">
            Delegado Responsavel: 
          </FormLabel>

          <CustomWidthInput
            width='300px'
            required
            fullWidth
            value={boFormState.form.delegado}
            name="delegado"
            onChange={(event) => handleChangeInput(event)}
            placeholder="Digite pelo menos 3 letras"
            />
        </InputContainer>
          
        <InputContainer aria-label='Delegacia-Procedimento'>
          <FormLabel className="label-input">
            Delegacia de Procedimento: 
          </FormLabel>

          <CustomWidthInput
            required
            fullWidth
            width='300px'
            value={boFormState.form.delegacia}
            name="delegacia"
            onChange={(event) => handleChangeInput(event)}
            placeholder="Digite pelo menos 3 letras"
          />
        </InputContainer>

        <Button type='submit' variant="contained">Registrar</Button>
      </form>
    </FormContainer>
  );
}

export default BORegister;
