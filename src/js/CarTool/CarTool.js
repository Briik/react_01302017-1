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
      userAddedCars: []
    };
  }
  addCar = (newCar) => {
    const newuserAddedCars = this.state.userAddedCars.concat([newCar]);
    this.setState({
      userAddedCars: newuserAddedCars
    });
  }
  render() {
    return (
        <div>
          <HeaderOne header="Car Tool" />
          <ItemTable
            itemList={this.props.carList}
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
