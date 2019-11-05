import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import Users from './Users';
import GetUsers from './blogApi';

jest.mock('./blogApi');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Users />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders no rows if there are no users', async () => {
  GetUsers.mockResolvedValue([]);
  const { queryAllByTitle, queryByRole } = render(<Users />);
  await waitForElementToBeRemoved(() => queryByRole('progressbar'));
  expect(queryAllByTitle('user row').length).toBe(0);
});

it('renders 2 rows if there are 2 users', async () => {
  GetUsers.mockResolvedValue([
    {
      id: 1,
      name: 'foo',
    },
    { id: 2, name: 'bar' },
  ]);
  const { queryAllByTitle, queryByRole } = render(<Users />);
  await waitForElementToBeRemoved(() => queryByRole('progressbar'));
  expect(queryAllByTitle(/^user/).length).toBe(2);
});
