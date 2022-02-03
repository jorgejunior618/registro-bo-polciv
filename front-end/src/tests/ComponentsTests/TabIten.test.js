import { render, screen } from '@testing-library/react';
import TabItem from '../../components/TabItem';

test('renders the main navigator', () => {
  render(<TabItem />);

  const buttonHandlerTab = screen.getByRole("button");
  const liNavIndicator = screen.getByLabelText("main-nav-item");

  expect(buttonHandlerTab).toBeInTheDocument();
  expect(liNavIndicator).toBeInTheDocument();
});
