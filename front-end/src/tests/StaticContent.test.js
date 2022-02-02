import { render, screen } from '@testing-library/react';
import MaintContent from '../components/StaticContent';

test('renders the app with tabs', () => {
  render(<MaintContent />);

  const navigationElement = screen.getByRole("navigation");
  const navChildrenLength = screen.getAllByLabelText("main-nav-item");

  expect(navigationElement).toBeInTheDocument();
  expect(navChildrenLength).toHaveLength(9);
});
