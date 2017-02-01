import React from 'react';
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
    deleteCarHandler = (car) => {
        if (this.state.carList.includes(car)) {
            let newState = this.state.carList.concat();
            newState = newState.filter(currentCar => {
                return (currentCar.ID !== car.ID);
            });
            this.setState({
                carList: newState
            });
        } else if (this.state.userAddedCars.includes(car)) {
            let newState = this.state.userAddedCars.concat();
            newState = newState.filter(currentCar => {
                return (currentCar.ID !== car.ID);
            });
            this.setState({
                carList: newState
            });
        }
    }
    makeCarEditable = (car, bool = true) => {
        let indexOfCar = this.state.carList.indexOf(car);
        if (indexOfCar > -1) {
            const newState = this.state.carList.concat();
            newState[indexOfCar].editable = bool;
            this.setState({
                carList: newState
            });
        } else if (indexOfCar === -1) {
            indexOfCar = this.state.userAddedCars.indexOf(car);
            const newState = this.state.userAddedCars.concat();
            newState[indexOfCar].editable = bool;
            this.setState({
                userAddedCars: newState
            });
        }
    }
    editCar = (car) => {
        console.log(`You want to edit car: ${car.Make}`);
        console.log('Doing stuff...');
        console.log('...lies...');
        this.cancelEdit(car);
    }
    cancelEdit = (car) => {
        this.makeCarEditable(car, false);
    }
    render() {
        return (
        <div>
          <HeaderOne header="Car Tool" />
          <ItemTable
            makeEditable={this.makeCarEditable}
            editItem={this.editCar}
            cancelEdit={this.cancelEdit}
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
