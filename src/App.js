import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodItem: "",
      relatedItems: [],
      appID: "1a53aa6a",
      appKey: "4dede038213c6fa35890d3f97c6c82ae",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
   getFoodItemsFromApi(item) {
    return fetch('https://api.edamam.com/api/food-database/parser?ingr='+item+'&app_id='+this.state.appID+'&app_key='+this.state.appKey)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({relatedItems: responseJson.hints});
        console.log(this.state.relatedItems);
        return responseJson.hints;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSubmit(event) {
    console.log("A search was submitted" + this.state.foodItem);
    this.getFoodItemsFromApi(this.state.foodItem)
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
          <h1 className="App-title">Nutrition App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form id="search" action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.foodItem} onChange={this.handleChange} placeholder="Enter food item here"/>
          <input type="submit" value="Submit"/>
        </form>

        {this.state.relatedItems.map(function(item, i){
              return <h1 key={i}>{item.food.brand} {item.food.label} </h1>
        })}
      </div>
    );
  }
}

export default App;
