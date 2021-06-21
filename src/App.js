import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './mycontext/Mycontext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blueCar: false,
      redCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }
  moveCar = (string, bool) => {
    this.setState(({ [string]: bool }))
  }
  render() {
    const { moveCar, state } = this;
    const handleCars = {
      moveCar,
      state,
    }
    return (
      <MyContext.Provider value={handleCars}>
      <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
