import React from 'react';
import ReactDOM from 'react-dom';
import HeaderOne from 'HeaderOne';
import ItemTable from 'ItemTable';

export default class CarTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCar: {},
      userAddedCars: []
    };
  }
  newCarChange = (event) => {
    const updatedCar = this.state.newCar;
    updatedCar[event.currentTarget.name] = event.currentTarget.value;
    this.setState({newCar: updatedCar});
  }
  addCarToState = (event) => {
    event.preventDefault();
    const newCar = this.state.newCar;
    const newuserAddedCars = this.state.userAddedCars.concat([newCar]);
    this.setState({
      userAddedCars: newuserAddedCars,
      newCar: {}
    });
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
        <div>
          <HeaderOne header="Car Tool" />
          <ItemTable
            itemList={this.props.carList}
            userAddedItems={this.state.userAddedCars}
            itemHeaders={this.props.carHeaders}
            />
          <form>
            {this.newCarInputs()}
            <button type='button' onClick={this.addCarToState}>Submit</button>
          </form>
        </div>
    );
  }
}
