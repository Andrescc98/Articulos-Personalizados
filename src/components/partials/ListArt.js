import React, { Component } from 'react'
import Art from './Art'

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
                  return <Art articulo={articulo} deleteArt={this.props.deleteArt} key={articulo.id_articulo} />
                })}
              </ul>
            </div>
          </div>
        )
    }
}
