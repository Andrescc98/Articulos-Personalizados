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

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        this.timeID=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }
    tick(){
        this.setState({date:new Date()});
    }
    render(){
        return(
            <div>
                <h1>hello, world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    
    }
}

function App(){
    return(
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    );
}
  

    const container = document.getElementById("root");

    ReactDOM.render(<App/>, container);



