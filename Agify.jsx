import React, { Component } from 'react';

class Agify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edad: null,
      cargando: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ cargando: true });
    fetch('https://api.agify.io/?name=valentina') // Reemplazá por tu nombre real
      .then(res => {
        if (!res.ok) throw new Error('Error en la solicitud');
        return res.json();
      })
      .then(data => this.setState({ edad: data.age, cargando: false }))
      .catch(err => this.setState({ error: err.message, cargando: false }));
  }

  render() {
    const { edad, cargando, error } = this.state;

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h2>Edad estimada según Agify:</h2>
        {edad !== null ? <p>{edad} años</p> : <p>No hay datos</p>}
      </div>
    );
  }
}

export default Agify;
