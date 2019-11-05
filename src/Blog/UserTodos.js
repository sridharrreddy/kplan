import React from 'react';
import { string } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { GetUserTodos } from './blogApi';

class UserTodos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      limit: 10,
      page: 0,
    };
  }

  async componentDidMount() {
    await this.loadData(0);
  }

  onPageChange = async (event, page) => {
    console.log('event', event, page);
    await this.loadData(page);
    this.setState(() => {
      return { page };
    });
  };

  async loadData(page) {
    const { userId } = this.props;
    const { limit } = this.state;
    const posts = await GetUserTodos(userId, page * limit, limit);
    this.setState({ posts });
  }

  render() {
    const { posts, page } = this.state;
    return (
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TablePagination
              rowsPerPage={10}
              page={page}
              onChangePage={this.onPageChange}
              count={100}
            />
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

UserTodos.propTypes = {
  userId: string.isRequired,
};

export default UserTodos;
