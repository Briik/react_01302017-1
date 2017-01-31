import React from 'react';
import ReactDOM from 'react-dom';
import ColorForm from './ColorForm';
import ItemList from '../ItemList';
import HeaderOne from '../HeaderOne';

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
