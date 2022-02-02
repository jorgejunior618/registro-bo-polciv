import { render, screen } from '@testing-library/react';
import MaintContent from '../components/StaticContent';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders the static component with tabs, tabs to paginate', () => {
  render(<MaintContent />);

  const navigationElement = screen.getByRole("navigation");
  const navChildrenLength = screen.getAllByLabelText("main-nav-item");

  expect(navigationElement).toBeInTheDocument();
  expect(navChildrenLength).toHaveLength(9);
});
