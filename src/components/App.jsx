import React, { useEffect } from 'react';
import * as css from './All.styled';
import {  GetContacts } from '../redux/operationsContacts';
import { useDispatch, useSelector } from 'react-redux';
import NavLinks from './NavLinks/NavLinks';
import RegistrationForm from '../pages/Registration/Registration';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from '../pages/Login/login';
import { PrivateRouter } from '../hooks/PrivateRouter';
import Contacts from '../pages/Contacts/Contacts';
import { FetchUser } from '../redux/operationsUser';


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
        <Route path='/' element={<css.BookContacts>Book Contacts</css.BookContacts>} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<PrivateRouter><Contacts /></PrivateRouter>} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>

    </div>
  )
};

export default App;

