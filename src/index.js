/* const element=document.createElement('h1');

element.innerHTML='hello react';

const container=document.getElementById('root');

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";
// import List from "./components/Lists";
import FilterableProductTable from "./components/FilterableProductTable";

class App extends React.Component{
  render(){
    return(
      <FilterableProductTable/>
    );
  }
}
    const container = document.getElementById("root");

    ReactDOM.render(<App/>, container);



