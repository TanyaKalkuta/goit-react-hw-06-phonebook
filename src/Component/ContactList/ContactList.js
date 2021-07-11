import React from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-action';
import PropTypes from 'prop-types';
import ElementContactList from '../ElementContactList/ElementContactList';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact_item}>
          <ElementContactList name={name} number={number} />
          <button
            type="button"
            onClick={() => {
              onClick(id);
            }}
            className={styles.item_button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  shownContacts: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const getVisibleContacts = (allcontacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allcontacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(contactActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
