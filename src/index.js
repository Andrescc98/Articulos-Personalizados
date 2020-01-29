/* const element=document.createElement('h1');

element.innerHTML='hello react';

const container=document.getElementById('root');

container.appendChild(element); */

import React from "react";
import ReactDOM from "react-dom";

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

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        };
        this.handleClick=this.handleClick.bind(this)
        
    }
    handleClick(){
        this.setState(state=>({
            isToggleOn:!state.isToggleOn
        }));
    }
    render(){
        return(
            <div className="container">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON':'OFF'}
                </button>
            </div>
        );
    }
}
    const container = document.getElementById("root");

    ReactDOM.render(<Toggle/>, container);



