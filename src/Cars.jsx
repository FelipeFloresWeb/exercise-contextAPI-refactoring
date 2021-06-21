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

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  redCar: state.carReducer.cars.red,
  blueCar: state.carReducer.cars.blue,
  yellowCar: state.carReducer.cars.yellow});

const mapDispatchToProps = { moveCar };

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
=======
export default Cars;
>>>>>>> 5485f44c4e6f2671146fe176b7a414f4f9dd5601
