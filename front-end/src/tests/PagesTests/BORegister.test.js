import { render, screen } from '@testing-library/react';
import BORegister from '../../Pages/BORegister';

test('renders the Form page to register a BO', () => {
  render(<BORegister />);

  const titulo = screen.getByText(/Ocorrência/i);
  const mainElement = screen.getByRole("main");
  const formElement = screen.getByRole("form");

  expect(titulo).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(formElement).toBeInTheDocument();
});
