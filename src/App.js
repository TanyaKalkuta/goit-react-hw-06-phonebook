import React from 'react';
// import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Container from './Component/Container/Container';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';
// import contactsUser from './json/contacts.json';

// import TransactionHistory from './Component/TransactionHistory/TransactionHistory';

class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  // state = {
  //   contacts: contactsUser,
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedTodos = JSON.parse(contacts);
  //   // console.log(parsedContacts);
  //   if (parsedTodos) {
  //     this.setState({ contacts: parsedTodos });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevState);
  //   // console.log(this.state);
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log('Обновились контакты, записываем в хранилище');
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // formAddContact = ({ name, number }) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };
  //   const contactNames = this.state.contacts.map(contact => contact.name);
  //   this.renderContacts(contactNames, contact.name, contact);
  // };

  renderContacts = (contactsList, contactName, newContact) => {
    if (contactsList.includes(contactName)) {
      alert(`${contactName} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };

  // changeFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          {/* <ContactForm onSubmit={this.formAddContact} /> */}
          <ContactForm />

          <h2>Contacts</h2>
          {/* <Filter value={this.state.filter} onChange={this.changeFilter} /> */}
          <Filter />

          {/* <ContactList
            visibleContacts={this.getVisibleContacts}
            onClick={this.deleteContact}
          /> */}
          <ContactList />
        </div>
      </Container>
    );
  }
}
export default App;
