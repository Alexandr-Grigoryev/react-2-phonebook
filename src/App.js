import { Component } from "react";
import Container from "./Components/Container/Container";
import ContactForm from "./Components/ContactForm/ContactForm";
import shortid from "shortid";

export default class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (name) => {
    console.log(name);

    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          {/* <Filter /> */}
          {/* <ContactList /> */}
        </div>
      </Container>
    );
  }
}
