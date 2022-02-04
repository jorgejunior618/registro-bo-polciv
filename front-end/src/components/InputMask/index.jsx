import { OutlinedInput } from '@mui/material';
import React from 'react';
import ReactInputMask from 'react-input-mask';

const InputMask = props => (
  <ReactInputMask aria-label='react-mask-input' {...props}>
    {inputProps => <OutlinedInput {...inputProps} disabled={props.disabled ? props.disabled : null} />}
  </ReactInputMask>
);

export default InputMask;
