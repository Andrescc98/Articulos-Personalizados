import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Task extends Component {
  styleComplite() {
    return this.props.task.done ? "" : "text-muted";
  }
  // delete=(e)=>{
  //   // if(confirm('¿Esta seguro de querer borrar esta tarea?')){
  //     this.props.deleteTask.bind(this,e.target.id);
  //   // }
  // }

  render() {
    const { task } = this.props;
    return (
      <div className="">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between">
            <div className={this.styleComplite()}>
              {task.title} -{task.description} -{task.done}
              {task.id}
            </div>
            <div>
              <input type="checkbox" name="" id="" onChange={this.props.checkDone.bind(this,task.id)} />
              <button 
               className="btn btn-danger rounded-circle"
               onClick={this.props.deleteTask.bind(this,task.id)}
               >x</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }

}
  Task.propTypes={
      task:PropTypes.object.isRequired
  }
