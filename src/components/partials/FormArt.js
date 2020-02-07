import React, { Component } from "react";
import Category from "./Category";

export default class FormArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo:'',
      contenido:'',
      id_categoria:'',
      // id_usuario:1
    };
  }


  onSubmit = e => {
    e.preventDefault();
    return this.props.formSubmit(this.state);
  };
  onChange=(e)=>{
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]:e.target.value
    });

    if(e.target.name==='id_categoria'){
      this.setState({
        [e.target.name]:parseInt(e.target.value)
      })
    }
  }



  render() {
    
    return (
      // formulario de envio
      <form onSubmit={this.onSubmit}>
        <div onChange={this.onChange}>

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

        <Category/>

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
