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
  Slide,
  Autocomplete,
  TextField,
  Checkbox,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { FormContainer, InputContainer, InputGroup } from "./styles";
import CustomWidthInput from '../../components/CustomWidthInput';
import { fileToBase64 } from '../../utils/file.util';
import InputMask from '../../components/InputMask';
import tableValues from './static';

function BORegister() {
  const {
    registroBO: boState,
    registroBOForm: boFormState
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ showAlert, setShowAlert ]= useState(false);
  const [ successAlert, setSuccessAlert ]= useState(false);
  const [ messageAlert, setMessageAlert ]= useState('');

  const getOrigensDenuncia = useCallback(
    () => {
      dispatch(registroActions.getOrigensList(handleOpenAlert));
    },
    [dispatch]
  );

  const getNomes = useCallback(
    () => {
      dispatch(registroActions.getNomesList(handleOpenAlert));
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

  const validateForm = useCallback(() => {
    const { form, origemDenuncia } = boFormState;

    if (!form.origemDenunciaId) {
      handleOpenAlert(false, 'Preencha a "Origem da Denúncia"');
      return false;
    }
    if (origemDenuncia.aceitaoficio) {
      if (!form.numeroOficio || !form.orgao) {
        handleOpenAlert(false, 'Preencha os campos referentes ao Ofício');
        return false;
      }
    }
    if (origemDenuncia.aceitaarquivo) {
      if (!form.arquivo) {
        handleOpenAlert(false, 'Selecione um Arquivo');
        return false;
      }
    }
    if (
      !form.dataInicioAcontecimentos ||
      !form.horaInicioAcontecimentos ||
      !form.delegado ||
      !form.delegacia
    ) {
      handleOpenAlert(false, 'Preencha todos os campos do formulário');
      return false;
    }
    return true;
  }, [boFormState]);

  const createRegistro = useCallback(
    (event) => {
      event.preventDefault();
      if (!validateForm()) return;
      
      dispatch(boFormActions.createRegistro(boFormState.form, handleOpenAlert))
    },
    [dispatch, boFormState, validateForm]
  );

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    const newValue = {};
    newValue[name] = value;
    
    updateForm(newValue);
  }

  const handleCloseAlert = (reason) => {
    if (reason !== 'clickaway') setShowAlert(false);
  }
  const handleOpenAlert = (success = true, message = 'Sucesso') => {
    setSuccessAlert(success);
    setMessageAlert(message);
    setShowAlert(true);
  }

  function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
  }

  useEffect(() => {
    getOrigensDenuncia();
    getNomes();
  }, [getOrigensDenuncia, getNomes]);

  const tableColumns = [
    { field: 'matricula', headerName: 'Matrícula', width: 225 },
    { field: 'autorizado', headerName: 'Autorizado', width: 425 },
    { field: 'cargo', headerName: 'Cargo', width: 200 },
    { field: 'validade', headerName: 'Validade', width: 280 },
  ];
  

  return (
    <FormContainer>
      <Snackbar
        open={showAlert}
        autoHideDuration={5000}
        onClose={(event, reason) => handleCloseAlert(reason)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={TransitionDown}
      >
        <Alert 
          onClose={handleCloseAlert} 
          variant="filled"
          severity={successAlert ? "success" : "error" }
          sx={{ width: '100%'}}
          
        >
          {messageAlert}
        </Alert>
      </Snackbar>

      <form
        aria-label="form"
        action="submit"
        onSubmit={createRegistro}
      >
        <h1>Registro Boletim de Ocorrência</h1>

        <InputContainer className='radio-buttons' aria-label='origem-denuncia'>
          <FormLabel className="label-input">
            Origem da Denúncia: 
          </FormLabel>
          <RadioGroup
            row
            aria-required
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
              <label htmlFor="contained-button-file">
                <input
                  accept=".pdf, .doc, .docx"
                  style={{ display: 'none' }}
                  onChange={async (event) => {
                    const arquivoBase64 = await fileToBase64(event.target.files[0]);

                    const { value } = event.target;
                    const values = value.split('\\');

                    updateForm({
                      arquivo: values[values.length-1],
                      arquivoBase64: arquivoBase64.split(',')[1],
                    });
                  }}
                  id="contained-button-file"
                  multiple={false}
                  type="file"
                />
                <Button style={{ marginRight: '10px'}} variant="contained" component="span">
                  {boFormState.form.arquivo ? 'Alterar ' : 'Adicionar '}arquivo
                </Button>
                <FormLabel className="label-input">
                  {boFormState.form.arquivo ? boFormState.form.arquivo+' ' : 'Nehum arquivo '}selecionado
                </FormLabel>
              </label>
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
                required
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
                required
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

          <div style={{ width: '250px'}}>
          <Autocomplete
            freeSolo
            fullWidth
            disableClearable
            required
            value={boFormState.form.delegado}
            name="delegado"
            onChange={(event, value) => {
              updateForm({
                delegado: value,
              })
            }}
            options={boState.nomesList}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                placeholder="Digite pelo menos 3 letras"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  style: {
                    padding: '0 6px'
                  }
                }}
                />
                )}
              />
            </div>
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

        <Button id="register-button" type='submit' variant="contained">Registrar</Button>

        <InputContainer aria-label='Restricao-Dados'>
          <FormControlLabel
            control={
              <Checkbox
                name='restricaoDados'
                checked={boFormState.form.restricaoDados}
                onChange={(event, checked) => {
                  updateForm({
                    restricaoDados: checked,
                  })
                }}
              />
            }
            label="Definir restrição de acesso"
          />
        </InputContainer>
      </form>
      <DataGrid
      style={{ width: '80%', minWidth: 1150, margin: '0' }}
        rows={tableValues}
        columns={tableColumns}
        pageSize={3}
        rowsPerPageOptions={[3]}
        autoHeight
        disableSelectionOnClick
        disableColumnSelector
        hideFooter
      />
    </FormContainer>
  );
}

export default BORegister;
