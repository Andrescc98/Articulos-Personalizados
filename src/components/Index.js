import React, { Component } from "react";
import ListArt from "./partials/ListArt";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: []
    };
    
  }
  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:2000/articulo");
      const data = await res.json();
      this.setState({
        articulos: data
      });
    } catch (error) {
      console.log(error);
    }
  }
  deleteArt(articulo){
    console.log(articulo)
    const newArt=this.state.articulos.filter(art=>art.titulo!==articulo);
    console.log(newArt);
    this.setState({
      articulo:newArt
    })
  }
  render() {
    return (
      <div  className="container">
        <ListArt articulos={this.state.articulos} deleteArt={this.deleteArt.bind(this)}/>
        <button className="btn-floating btn-large waves-effect waves-light blue right"><i className="fa fa-plus"></i></button>
      </div>
    );
  }
}
