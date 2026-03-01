import { render } from '@testing-library/react';
import App from './App';

test('deve renderizar o componente principal sem erros', () => {
  const { container } = render(<App />);
  
  expect(container).toBeDefined();
});