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
      const res = await fetch("http://192.168.1.10:2000/articulo");
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
      <div  className="container">
        <ListArt articulos={this.state.articulos}/>
        <button className="btn-floating btn-large waves-effect waves-light blue right"><i className="fa fa-plus"></i></button>
      </div>
    );
  }
}
