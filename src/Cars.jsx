// src/Cars.jsx
import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './mycontext/Mycontext';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <MyContext.Consumer>
      {
        value => (
          <div>
      <div>
        <img
          className={value.state.redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => value.moveCar('redCar', !value.state.redCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={value.state.blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => value.moveCar('blueCar', !value.state.blueCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={value.state.yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => value.moveCar('yellowCar', !value.state.yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
        )
      }
    </MyContext.Consumer> 
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default Cars;
