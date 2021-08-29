import { Component } from "react";
import Container from "./Components/Container/Container";
import ContactForm from "./Components/ContactForm/ContactForm";

export default class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {};

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
