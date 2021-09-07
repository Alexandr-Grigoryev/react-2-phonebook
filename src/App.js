import { Component } from "react";
import Container from "./Components/Container/Container";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import ContactListItem from "./Components/ContactListItem/ContactListItem";
import Filter from "./Components/Filter/Filter";
import shortid from "shortid";

export default class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }

    // if (nextContacts.length > prevContacts.length && prevContacts.length !== 0) {
    //   this.toggleModal();
    // }
  }

  formSubmitHandler = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteItem = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList list={visibleContacts} onDelete={this.deleteItem}>
            {visibleContacts.map((item) => (
              <ContactListItem
                item={item}
                key={item.id}
                onDelete={this.deleteItem}
                id={item.id}
              />
            ))}
          </ContactList>
        </div>
      </Container>
    );
  }
}
