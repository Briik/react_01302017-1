import React from 'react';

export default class CarForm extends React.Component {

    static propTypes = {
        carHeaders: React.PropTypes.arrayOf(React.PropTypes.string),
        addCar: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        const newCarObject = {};
        this.props.carHeaders.forEach(header => newCarObject[header] = '');
        this.state = {
            newCar: JSON.parse(JSON.stringify(newCarObject)),
            resetCarObject: newCarObject
        };
    }
    addCarToState = (event) => {
        event.preventDefault();
        this.props.addCar(this.state.newCar);
        this.setState({
            newCar: this.state.resetCarObject
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
          value={this.state.newCar[e]}
          onChange={this.newCarChange} />
      </div>
    );
    }
    render() {
        return (
      <form onSubmit={e => e.preventDefault()}>
        {this.newCarInputs()}
        <button type='button' onClick={this.addCarToState}>Submit</button>
      </form>
        );
    }
}
