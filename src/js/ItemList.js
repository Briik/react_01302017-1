import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemList extends React.Component {

  static propTypes = {
    items: React.PropTypes.array
  }

  render() {
    return (
      <ul>
        {this.props.items.map(e =>
          <li key={`${e}-li`}>{e}</li>
        )}
      </ul>
    );
  }
}
