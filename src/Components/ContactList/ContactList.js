import { Component } from "react";

export default class ContactList extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}

// function ContactList({ list }) {
//   return (
//     <ul className="friend-list">
//       {list.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default ContactList;
