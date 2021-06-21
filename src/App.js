<<<<<<< HEAD
import React from 'react';
import TrafficSignal from './TrafficSignal';
=======
import React, { Component } from 'react';
>>>>>>> 5485f44c4e6f2671146fe176b7a414f4f9dd5601
import './App.css';
import Cars from './Cars';
import MyContext from './mycontext/Mycontext';

<<<<<<< HEAD
function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
=======
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
>>>>>>> 5485f44c4e6f2671146fe176b7a414f4f9dd5601
}

export default App;
