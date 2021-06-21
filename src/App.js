import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './mycontext/Mycontext';
import TrafficSignal from './components/TrafficSignal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blueCar: false,
      redCar: false,
      yellowCar: false,
      signalColor: 'red',
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar = (string, bool) => {
    this.setState(({ [string]: bool }))
  }

  changeSignal = (event) => {
    const { innerHTML } = event.target;
    this.setState(({ signalColor: innerHTML.toLowerCase() }))
  }

  render() {
    const { moveCar, state, changeSignal } = this;
    const handleCars = {
      moveCar,
      state,
      changeSignal,
    }
    return (
      <MyContext.Provider value={handleCars}>
      <TrafficSignal />
      <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
