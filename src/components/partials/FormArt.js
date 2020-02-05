import React, { Component } from "react";

export default class FormArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: []
    };
  }
  formSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };
  async componentDidMount() {
    try {
      const res = await fetch("http://192.168.1.10:2000/articulo/crear");
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
      <form onSubmit={this.formSubmit}>
        <div className="input-field">
          <input type="text" id="titulo" name="titulo" />
          <label htmlFor="titulo">Titulo</label>
        </div>
        <div className="input-field">
          <textarea
            name="contenido"
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="contenido">Contenido</label>
        </div>

        <div className="input-field">
          <select name="categoria" id="categoria" className="browser-default">
            <option selected disabled >
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
        <div className="input-field">
          <button type="submit" className="btn btn-block blue">
            <i className="fa fa-arrow-alt-circle-right"></i> Enviar
          </button>
        </div>
      </form>
    );
  }
}
