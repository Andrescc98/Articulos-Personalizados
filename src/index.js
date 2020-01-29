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

function UserGreeting(props){
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
    return <h1>please sing up!</h1>
}
function Greeting(props){
    const isLoggedIn=props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}
    const container = document.getElementById("root");

    ReactDOM.render(<Greeting isLoggedIn={true}/>, container);



