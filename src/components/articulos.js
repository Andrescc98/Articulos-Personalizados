import React, { Component } from "react";

export default class Articulo extends Component {
  state = {
    articulos: []
  };
  async componentDidMount() {
    const res = await fetch("http://localhost:2000/articulo");
    const data = await res.json();
    console.log(data);

    this.setState({
      articulos: data
    });
  }
  render() {
    return (
      <div>
        {this.state.articulos.map(articulo => {
          return (
            <div key={articulo.id}>
              <h1>{articulo.titulo}</h1>
              <p>{articulo.contenido}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
