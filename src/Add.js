import React from 'react';

function Header() {
  return <span style={{ color: '#fff', fontSize: '40px' }}>Header</span>;
}

class Add extends React.Component {
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

    return (
      <>
        <div>
          <input
            type="number"
            name="operand1"
            value={operand1}
            onChange={this.inputChange}
          />
          <input
            type="number"
            name="operand2"
            value={operand2}
            onChange={this.inputChange}
          />
        </div>
        <div>
          Result
          <span id="result">{operand1 + operand2}</span>
        </div>
      </>
    );
  }
}

export default Add;
