import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';
// import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };

// const contactAction = { addContact, deleteContact, changeFilter };
// export default contactAction;
