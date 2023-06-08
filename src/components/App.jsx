import React, { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import * as css from './All.styled';
import { GetContacts } from '../redux/operations';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetContacts())
  }, [dispatch]);


  return (
    <css.DivAll>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </css.DivAll>
  )
};

export default App;

