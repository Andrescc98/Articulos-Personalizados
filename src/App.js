import React from "react";

import "./App.css";

class HelloWorld extends React.Component {
  state = {
    show: true
  };
  toggleShow() {
    this.setState({ show: !this.state.show });
  }
  render() {
    if (this.state.show) {
      return (
        <div id="id">
          {this.props.mytext}
          <button onClick={this.toggleShow.bind(this)}>cambiar estado</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>no hay elementos</h1>
          <button onClick={this.toggleShow.bind(this)}>cambiar estado</button>
        </div>
      );
    }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          this is my component:
          <HelloWorld mytext="hello fazt" />
          <HelloWorld mytext="hello andres" />
          <HelloWorld mytext="hello coronado" />
        </div>
      </div>
    );
  }
}

export default App;
