import { Component } from "react";
import ContactListItem from "../ContactListItem/ContactListItem";

export default class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <ContactListItem item={item} key={item.id} />
        ))}
      </ul>
    );
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
