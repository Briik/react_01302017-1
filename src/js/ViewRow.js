import React from 'react';

class EditableCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    onChange = (event) => {
        this.setState({
            value: event.currentTarget.value
        });
    }
    render() {
        return(
      <td>
        <input
          type="text"
          name={this.state.value}
          value={this.state.value}
          onChange={this.onChange} />
      </td>
        );
    }
}

class NonEditableCell extends React.Component {
    render() {
        return (
      <td key={`${this.props.item.e}-td-${this.props.i}`}>
        {this.props.item[this.props.e]}
      </td>
        );
    }
}

export default class ViewRow extends React.Component {

    static propTypes = {
        item: React.PropTypes.object,
        editItem: React.PropTypes.func
    }

    makeCell(e, i) {
        if (this.props.item.editable == true) {
            return (
        <EditableCell
          value={this.props.item[e]}
          item={this.props.item}
        />
            );
        } else {
            return (
        <NonEditableCell
          item={this.props.item}
          e={e}
          i={i} />
            );
        }
    }
    makeButton(callback, text) {
        return (
      <td>
        <button
          type="button"
          onClick={callback}>{text}</button>
      </td>
        );
    }
    render() {
        const itemKeys = Object.keys(this.props.item);
        return (
      <tr key={this.props.item[itemKeys[1]]}>
        {itemKeys.map((e, i) => this.makeCell(e, i))}
        {this.props.item.editable === true
        ? [
            this.makeButton(() => {this.props.editItem(this.props.item);}, 'Save'),
            this.makeButton(() => {this.props.cancel(this.props.item);}, 'Cancel')
        ]
        : [
            this.makeButton(() => {this.props.edit(this.props.item);}, 'Edit'),
            this.makeButton(() => {this.props.delete(this.props.item);}, 'Delete')
        ]}
      </tr>
        );
    }
}
