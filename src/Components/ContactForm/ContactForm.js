import { Component } from "react";
import s from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.formButton}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          //   value={this.state.name}
        />

        <button name="" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
