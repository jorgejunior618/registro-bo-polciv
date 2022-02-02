import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the app with tabs', () => {
  render(<App />);

  const mainElement = screen.getByRole("navigation");

  expect(mainElement).toBeInTheDocument();
});
