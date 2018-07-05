import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodItem: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("A search was submitted");
    console.log(this.state.foodItem);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({foodItem: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form id="search" action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.foodItem} onChange={this.handleChange} placeholder="Enter food item here"/>
          <input type="submit" value="Submit"/>
        </form>

      </div>
    );
  }
}

export default App;
