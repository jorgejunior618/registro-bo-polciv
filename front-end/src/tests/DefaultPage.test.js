import { render, screen } from '@testing-library/react';
import DefaultPage from '../pages/DefaultPage';

test('renders the page from Routes non-registrated', () => {
  render(<DefaultPage />);

  const titulo = screen.getByText(/.../i);
  const icone = screen.getByTestId("ConstructionIcon");

  expect(titulo).toBeInTheDocument();
  expect(icone).toBeInTheDocument();
});
