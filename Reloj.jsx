import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
      activo: false,
    };
    this.timer = null;
  }

  iniciarReloj = () => {
    if (!this.state.activo) {
      this.timer = setInterval(() => {
        this.setState({ hora: new Date().toLocaleTimeString(), activo: true });
      }, 1000);
    }
  };

  detenerReloj = () => {
    clearInterval(this.timer);
    this.setState({ activo: false });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Hora actual: {this.state.hora}</h2>
        <button onClick={this.iniciarReloj}>Iniciar</button>
        <button onClick={this.detenerReloj}>Detener</button>
      </div>
    );
  }
}

export default Reloj;
