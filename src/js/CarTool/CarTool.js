import React from 'react';
import ReactDOM from 'react-dom';
import CarForm from './CarForm';
import HeaderOne from '../HeaderOne';
import ItemTable from '../ItemTable';

export default class CarTool extends React.Component {

  static propTypes = {
    carHeaders: React.PropTypes.arrayOf(React.PropTypes.string),
    carList: React.PropTypes.arrayOf(React.PropTypes.object)
  }

  constructor(props) {
    super(props);
    this.state = {
      userAddedCars: [],
      carList: this.props.carList.concat()
    };
  }
  addCar = (newCar) => {
    const newuserAddedCars = this.state.userAddedCars.concat([newCar]);
    this.setState({
      userAddedCars: newuserAddedCars
    });
  }
  deleteCar(car, ) {

  }
  deleteCarHandler = (car) => {
    if (this.state.carList.includes(car)) {
      const indexOfCar = this.state.carList.indexOf(car);
      if (indexOfCar > -1) {
        const newState = this.state.carList.concat();
        newState.splice(indexOfCar, 1);
        this.setState({
          carList: newState
        });
      }
    } else if (this.state.userAddedCars.includes(car)) {
      const indexOfCar = this.state.userAddedCars.indexOf(car);
      if (indexOfCar > -1) {
        const newState = this.state.userAddedCars.concat();
        newState.splice(indexOfCar, 1);
        this.setState({
          userAddedCars: newState
        });
      }
    }
  }
  makeCarEditable = (car) => {
    if (this.state.carList.includes(car)) {
      const indexOfCar = this.state.carList.indexOf(car);
      if (indexOfCar > -1) {
        const newState = this.state.carList.concat();
        newState[indexOfCar].editable = true;
        this.setState({
          carList: newState
        });
      }
    } else if (this.state.userAddedCars.includes(car)) {
      const indexOfCar = this.state.userAddedCars.indexOf(car);
      if (indexOfCar > -1) {
        const newState = this.state.userAddedCars.concat();
        newState[indexOfCar].editable = true;
        this.setState({
          userAddedCars: newState
        });
      }
    }
  }
  editCar = (car, data) => {
    console.log(`You want to edit car ${car.id} with value ${data}`);
  }
  render() {
    return (
        <div>
          <HeaderOne header="Car Tool" />
          <ItemTable
            makeEditable={this.makeCarEditable}
            editItem={this.editCar}
            deleteItem={this.deleteCarHandler}
            itemList={this.state.carList}
            userAddedItems={this.state.userAddedCars}
            itemHeaders={this.props.carHeaders}
            />
          <CarForm
            carHeaders={this.props.carHeaders}
            addCar={this.addCar}
            />
        </div>
    );
  }
}
