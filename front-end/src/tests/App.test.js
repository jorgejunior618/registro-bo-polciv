import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the main App Container', () => {
  render(<App />);

  const mainElement = screen.getByRole("main");

  expect(mainElement).toBeInTheDocument();
});
