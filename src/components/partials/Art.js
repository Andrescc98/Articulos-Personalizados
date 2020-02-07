import React, { Component } from "react";

export default class Art extends Component {
  async delete() {
    const titulo_articulo = this.props.articulo.titulo;
    if (
      window.confirm("¿Estas seguro de querer borrar \""+titulo_articulo+"\"")) {
      console.log(titulo_articulo);
      const res = await fetch(
        "http://localhost:2000/articulo/" + titulo_articulo + "?_method=DELETE",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      );
      const data =await res.json();
      console.log(data);
      this.props.deleteArt(titulo_articulo);
    }
  }
  render() {
    return (
      <li className="collection-item">
        <div>
          <div className="left-align">{this.props.articulo.titulo}</div>
          <div className="right-align">
            <button className="btn btn-small light-blue darken-3">
              <i className="fa fa-edit"></i>
            </button>
            <button
              onClick={this.delete.bind(this)}
              className="btn btn-small red"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}
