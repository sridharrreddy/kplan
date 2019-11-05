import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from '@reach/router';
import GetUsers from './blogApi';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const users = await GetUsers();
    this.setState({ users, loading: false });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Posts</TableCell>
            <TableCell>TODOs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell component="th" scope="row">
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
          {users.map(row => (
            <TableRow key={row.id} title={`user ${row.name}`}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/users/${row.id}/posts`}>Posts</Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <Link to={`/users/${row.id}/todos`}>TODOs</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default Users;
