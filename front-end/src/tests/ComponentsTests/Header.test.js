import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

test('renders the Default Header', () => {
  render(<Header />);

  const headerElement = screen.getByTitle("Header");

  expect(headerElement).toBeInTheDocument();
});
