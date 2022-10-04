import { render, screen } from '@testing-library/react';
import App from './App';

test('renders root element', () => {
  render(<App />);
  const app = screen.getByTestId('App');
  expect(app).toBeInTheDocument();
});
