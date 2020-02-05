import React, { Component } from "react";
import "./App.css";
import task from "./sample/task.json";
import Tasks from "./components/tasks";
import TaskForm from "./components/TaskForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Articulo from "./components/articulos";

class App extends Component {
  state = {
    tasks: task
  };
  addTask = task => {
    const newTask = {
      title: task.title,
      description: task.description,
      id: this.state.tasks.length + 1
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  deleteTask = id => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTask
    });
  };
  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: newTask
    });
  };

  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/articulo">Articulos</Link>
        <Route exact
          path="/"
          render={() => (
            <div>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                checkDone={this.checkDone}
                deleteTask={this.deleteTask}
              />
            </div>
          )}
        ></Route>
        <Route path="/articulo" component={Articulo}></Route>
      </Router>
    );
  }
}

export default App;
