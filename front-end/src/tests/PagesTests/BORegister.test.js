import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BORegister from '../../Pages/BORegister';
import configureStore from '../../redux/configureStore';

test('renders the Form page to register a BO', () => {
  const { store } = configureStore();
  render(<Provider store={store}><BORegister /></Provider>);

  const titulo = screen.getByText(/Ocorrência/i);
  const mainElement = screen.getByRole("main");
  const formElement = screen.getByRole("form");

  expect(titulo).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(formElement).toBeInTheDocument();
});
