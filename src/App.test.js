import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns 10 when 6 and 4 are added', () => {
  // Arrange
  const { getByPlaceholderText, getByText } = render(<App />);
  const operand1 = getByPlaceholderText('Operand 1');
  fireEvent.change(operand1, { target: { value: '6' } });
  const operand2 = getByPlaceholderText('Operand 2');
  fireEvent.change(operand2, { target: { value: '4' } });
  const result = getByPlaceholderText('Result');
  const addButton = getByText('Add');
  // Act
  fireEvent.click(addButton);
  // Assert
  expect(result.value).toBe('10');
});
