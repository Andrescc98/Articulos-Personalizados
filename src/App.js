import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import Navbar from "./components/partials/Navbar";
import Foot from "./components/partials/Foot";
// import './estructura.css'

export default class App extends Component {
  render() {
    return (      
        <Router>
          <Navbar />
          <section>
          <Route exact path="/" component={Index} />
          </section>
          <div className="push"></div>
          <Foot/>
        </Router>      
    );
  }
}
