import React, { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import * as css from './All.styled';
import { FetchUser, GetContacts } from '../redux/operations';
import { useDispatch } from 'react-redux';
import NavLinks from './NavLinks/NavLinks';
import RegistrationForm from './Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Login/login';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetContacts())

    dispatch(FetchUser())
      
    //   .then(() => {
    //   // dispatch(GetContacts())
    // })
  }, [dispatch]);


  return (
    <div>
      <css.Nav>
        <NavLinks />
      </css.Nav>

      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      <css.DivAll>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </css.DivAll></div>
  )
};

export default App;

