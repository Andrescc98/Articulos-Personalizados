/* const element=document.createElement('h1');

element.innerHTML='hello react';

const container=document.getElementById('root');

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";
import List from'./components/Lists';

/* function Welcome(props) {
  return <h1>hello {props.name}</h1>;
}

const element = (
  <div className="container">
    <Welcome name="andres" />
    <Welcome name="coronado" />
    <Welcome name="calzadilla" />
  </div>
);
 */

class App extends React.Component{
  render(){
    return(
      <List/>
    );

  }
}
    const container = document.getElementById("root");

    ReactDOM.render(<App/>, container);



