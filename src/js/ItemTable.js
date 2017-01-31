import React from 'react';
import ReactDOM from 'react-dom';
import ViewRow from 'ViewRow';

export default class ItemTable extends React.Component {

  static propTypes = {
    userAddedItems: React.PropTypes.array,
    itemHeaders: React.PropTypes.array,
    deleteItem: React.PropTypes.func
    }

  tableHead() {
    return (
      <thead>
        <tr>
          {this.props.itemHeaders.map(e =>
            <th key={e}>{e}</th>
          )}
        </tr>
      </thead>
    );
  }
  tableBody() {
    const fullItemArray = this.props.itemList.concat(this.props.userAddedItems);
    return (
      <tbody>
          {fullItemArray.map((e, i) =>
            <ViewRow
              key={`${i}-${e}`}
              item={e}
              delete={this.props.deleteItem}
              edit={this.props.makeEditable}
              editItem={this.props.editItem} />
          )}
      </tbody>
    );
  }
  render () {
    return(
      <table>
        {this.tableHead()}
        {this.tableBody()}
      </table>
    )
  }
}
