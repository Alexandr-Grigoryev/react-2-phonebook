import { Component } from "react";
export default class ContactListItem extends Component {
  render() {
    return (
      <li>
        {this.props.item.name}:{this.props.item.number}
      </li>
    );
  }
}
