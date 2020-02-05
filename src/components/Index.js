import React, { Component } from "react";

export default class Index extends Component {
  constructor(props) {
    super(props);
    state = {
      articulos: []
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:2000/");
      const data = await res.json();
      this.setState({
        articulos: data
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        {this.state.articulos.map(articulo=>{
            <div>
                <p>{articulo.titulo}</p>
            </div>
        })}
      </div>
    );
  }
}
