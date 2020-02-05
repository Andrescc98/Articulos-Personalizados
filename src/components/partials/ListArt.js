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
                      {articulo.titulo}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )
    }
}
