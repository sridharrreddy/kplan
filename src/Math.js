import React from 'react';
import { func } from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const SpacedTextField = styled(TextField)({
  marginLeft: '30px',
});

class Math extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: 0,
      operand2: 0,
    };
  }

  inputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: parseInt(value),
    });
  };

  render() {
    const { operand1, operand2 } = this.state;
    const { onAction } = this.props;
    return (
      <>
        <Container>
          <Grid container justify="center">
            <TextField
              onChange={this.inputChange}
              name="operand1"
              label="Operand 1"
              placeholder="Operand 1"
              value={operand1}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
            <SpacedTextField
              onChange={this.inputChange}
              name="operand2"
              label="Operand 2"
              placeholder="Operand 2"
              type="number"
              value={operand2}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => onAction(operand1 + operand2)}
            >
              Add
            </Button>
          </Grid>
        </Container>
      </>
    );
  }
}

Math.propTypes = {
  onAction: func.isRequired,
};

export default Math;
