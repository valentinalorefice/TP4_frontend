// Contador.jsx
import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState(prevState => ({ contador: prevState.contador + 1 }));
  };

  decrementar = () => {
    this.setState(prevState => ({ contador: prevState.contador - 1 }));
  };

  render() {
    return (
      <div>
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
      </div>
    );
  }
}

export default Contador;
