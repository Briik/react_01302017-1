import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from 'ItemList';
import HeaderOne from 'HeaderOne';

class ColorForm extends React.Component {

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
      <form>
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

export default class ColorTool extends React.Component {

  static propTypes = {
    myColors: React.PropTypes.array
  }

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.myColors.concat()
    };
  }
  addColor = (newColor) => {
    this.setState({
      colors: this.state.colors.concat(newColor)
    })
  }
  render() {
    return (
      <div>
        <HeaderOne header="Color Tool" />
        <ItemList items={this.state.colors} />
        <ColorForm addColor={this.addColor} />
      </div>
    );
  }
}
