import React from 'react';
import ReactDOM from 'react-dom';

class DemoForm extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            inputText: '',
            inputNumber: 0,
            inputDate: '2017-02-01',
            inputRange: 25,
            inputColor: '#f364d4',
            inputRadio: 'radio2'
        };
    }
    onChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.type === 'number'
        ? Number(e.currentTarget.value) : e.currentTarget.value
        });
    }
    render() {
        return(
      <form>
        <div>
          <label>Input Text:</label>
          <input
            type="text"
            name="inputText"
            value={this.state.inputText}
            onChange={this.onChange} />
          <br /><span>{this.state.inputText}</span>
        </div>
        <div>
          <label>Input Number:</label>
          <input
            type="number"
            name="inputNumber"
            value={this.state.inputNumber}
            onChange={this.onChange} />
          <br /><span>{this.state.inputNumber}, {typeof this.state.inputNumber}</span>
        </div>
        <div>
          <label>Input Date:</label>
          <input
            type="date"
            name="inputDate"
            value={this.state.inputDate}
            onChange={this.onChange} />
          <br /><span>{this.state.inputDate}, {typeof this.state.inputDate}</span>
        </div>
        <div>
          <label>Input Range:</label>
          <input
            min="20"
            max="60"
            type="range"
            name="inputRange"
            value={this.state.inputRange}
            onChange={this.onChange} />
          <br /><span>{this.state.inputRange}, {typeof this.state.inputRange}</span>
        </div>
        <div>
          <label>Input Color:</label>
          <input
            type="color"
            name="inputColor"
            value={this.state.inputColor}
            onChange={this.onChange} />
          <br /><span>{this.state.inputColor}, {typeof this.state.inputColor}</span>
        </div>
        <fieldset>
          <legend>Amazing Legend</legend>
            <div>
              <label>Input Radio 1:</label>
              <input
                type="radio"
                name="inputRadio"
                value="radio1"
                checked={this.state.inputRadio === 'radio1'}
                onChange={this.onChange} />
            </div>
            <div>
              <label>Input Radio 2:</label>
              <input
                type="radio"
                name="inputRadio"
                value="radio2"
                checked={this.state.inputRadio === 'radio2'}
                onChange={this.onChange} />
            </div>
        </fieldset>
      </form>
        );
    }
}

ReactDOM.render(<DemoForm />, document.querySelector('main'));
