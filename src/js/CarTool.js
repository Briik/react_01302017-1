import React from 'react';
import ReactDOM from 'react-dom';
import HeaderOne from 'HeaderOne';
import ItemTable from 'ItemTable';

class CarForm extends React.Component {

  static propTypes = {
    addCar: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      newCar: {}
    }
  }
  addCarToState = (event) => {
    event.preventDefault();
    this.props.addCar(this.state.newCar);
    this.setState({
      newCar: {}
    });
  }
  newCarChange = (event) => {
    const updatedCar = this.state.newCar;
    updatedCar[event.currentTarget.name] = event.currentTarget.value;
    this.setState({newCar: updatedCar});
  }
  newCarInputs() {
    return this.props.carHeaders.map(e =>
      <div key={`new-item-input-${e}`}>
        <label htmlFor={`new-item-input-${e}`}>{e}</label>
        <input
          type="test"
          id={`new-item-input-${e}`}
          name={e}
          value={this.state.newCar[e] || ''}
          onChange={this.newCarChange} />
      </div>
    )
  }
  render() {
    return (
      <form>
        {this.newCarInputs()}
        <button type='button' onClick={this.addCarToState}>Submit</button>
      </form>
    );
  }
}

export default class CarTool extends React.Component {

  static propTypes = {
    carHeaders: React.PropTypes.array,
    carList: React.PropTypes.array
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
