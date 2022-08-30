import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link and login button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn DevOps/i);
  expect(linkElement).toBeInTheDocument();
  let button = screen.getByRole(/button/i);
  expect(button).toHaveTextContent('Login');
});
test('has login button', () => {
  render(<App/>);
});

