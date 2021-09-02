import { Component } from "react";
export default class ContactListItem extends Component {
  render() {
    const { item, onDelete, id } = this.props;

    return (
      <li>
        {item.name}:{item.number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
}
