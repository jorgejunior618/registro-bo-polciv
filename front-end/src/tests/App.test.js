import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from '../redux/configureStore';

test('renders the main App Container', () => {
  const { store } = configureStore();
  render(<Provider store={store}><App /></Provider>);

  const mainElement = screen.getByRole("main");

  expect(mainElement).toBeInTheDocument();
});
