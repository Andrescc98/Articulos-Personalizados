import React, { Component } from "react";
import Task from "./task";
// import PropTypes from "prop-types";

export default class Tasks extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <Task task={task} checkDone={this.props.checkDone} deleteTask={this.props.deleteTask}  key={task.id}/>
        ))}
        <br/>
        
      </div>
    );
  }
}
  // Task.propTypes={
  //     task:PropTypes.array.isRequired
  // }
