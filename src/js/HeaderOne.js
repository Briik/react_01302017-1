import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderOne extends React.Component {
  render() {
    return <h1>{this.props.header}</h1>
  }
}
