import React, { Component } from "react";

export default class TaskForm extends Component {

  state={
    title:'',
    description:''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
  };
  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })

  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="escribe una tarea"
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <textarea
          placeholder="escribe una descripcion"
          onChange={this.onChange}
          name="description"
        >{this.state.description}</textarea>
        <button type="submit">enviar</button>
      </form>
    );
  }
}
