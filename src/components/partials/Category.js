import React, { Component } from "react";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: []
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:2000/articulo/crear");
      const data = await res.json();
      this.setState({
        categorias: data
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="input-field">
        <select name="id_categoria" id="id_categoria" className="browser-default">
          <option selected disabled>
            Seleccione categoria
          </option>
          {this.state.categorias.map(cat => {
            return (
              <option value={cat.id_categoria} key={cat.id_categoria}>
                {cat.n_categoria}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="categoria">Categoria</label> */}
      </div>
    );
  }
}
