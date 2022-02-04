import { render, screen } from '@testing-library/react';
import CustomWidthInput from '../../components/CustomWidthInput';
import InputMask from '../../components/InputMask';

test('renders the Custimized Input from "mui" library', () => {
  render(<CustomWidthInput />);

  const inputElement = screen.getByLabelText("customized-textfield");

  expect(inputElement).toBeInTheDocument();
});

test('renders the Input with mask "react-input-mask" library', () => {
  render(<InputMask />);

  const inputElement = screen.getByLabelText("react-mask-input");

  expect(inputElement).toBeInTheDocument();
});
