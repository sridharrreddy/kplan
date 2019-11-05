import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import Hello from './Hello';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testMe: 'foo',
    };
  }

  render() {
    return (
      <Container>
        <Hello />
      </Container>
    );
  }
}

export default App;
