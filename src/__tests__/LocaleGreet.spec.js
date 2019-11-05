import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import LocaleGreet from '../LocaleGreet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocaleGreet language="gb" name="gb" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders greeting in english', () => {
  const { getByText } = render(<LocaleGreet language="en" name="Henry" />);
  expect(getByText('Hello Henry')).toBeTruthy();
});

it('renders greeting in german', () => {
  const { getByText } = render(<LocaleGreet language="gb" name="Henry" />);
  expect(getByText('Halo Henry')).toBeTruthy();
});
