import React, { Component } from 'react'

export default class ListArt extends Component {
    render() {
        return (
            <div>
            <div className="container">
              <ul className="collection with-header">
                <li className="collection-header">
                  <h5>Articulos Creados</h5>
                </li>
                {this.props.articulos.map(articulo => {
                  return (
                    <li className="collection-item" key={articulo.id_articulo}>
                      <div>
                      <div className="left-align">{articulo.titulo}</div>
                      <div className="right-align">
                        <button className="btn btn-small light-blue darken-3"><i className="fa fa-edit"></i></button>
                        <button className="btn btn-small red"><i className="fa fa-trash"></i></button>
                      </div></div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )
    }
}
