import React from 'react';
import ReactDOM from 'react-dom';

export default class ColorForm extends React.Component {

  static propTypes = {
    addColor: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state= {
      newColor: ''
    }
  }
  addNewColor = () => {
    this.props.addColor(this.state.newColor);
    this.setState({
      newColor: ''
    });
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <label htmlFor="new-color-input">New Color</label>
          <input
            type="test"
            id="new-color-input"
            name="newColor"
            value={this.state.newColor}
            onChange={this.handleChange} />
        </div>
        <button type="button" onClick={this.addNewColor}>Add Color</button>
      </form>
    );
  }
}
