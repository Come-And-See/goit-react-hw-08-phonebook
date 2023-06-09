import React, { useEffect } from 'react';
import * as css from './All.styled';
import { FetchUser, GetContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import NavLinks from './NavLinks/NavLinks';
import RegistrationForm from './Registration/Registration';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Login/login';
import { PrivateRouter } from '../Hoc/PrivateRouter';
import Contacts from './Contacts/Contacts';


const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)


  useEffect(() => {
    dispatch(FetchUser())
    dispatch(GetContacts())
  }, [dispatch, isLoggedIn]);



  return (
    <div>
      <css.Nav>
        <NavLinks />
      </css.Nav>

      <Routes>
        <Route path='/' element={<css.BookContacts>Book Contacts</css.BookContacts>}/>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<PrivateRouter><Contacts /></PrivateRouter>} />
      </Routes>

    </div>
  )
};

export default App;

