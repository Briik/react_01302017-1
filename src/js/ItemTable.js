import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemTable extends React.Component {
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
  tableRow(item) {
    const itemKeys = Object.keys(item);
    return (
      <tr key={item[itemKeys[1]]}>
        {
          itemKeys.map(e =>
            <td key={`${item[e]}-td`}>
              {item[e]}
            </td>
          )
        }
      </tr>
    )
  }
  tableBody() {
    const fullItemArray = this.props.itemList.concat(this.props.userAddedItems);
    return (
      <tbody>
          {fullItemArray.map(e =>
            this.tableRow(e)
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
