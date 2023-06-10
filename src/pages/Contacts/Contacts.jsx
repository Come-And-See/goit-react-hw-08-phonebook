import React from 'react'
import * as css from '../../components/All.styled';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';

const Contacts = () => {
    return (
        <css.DivAll>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </css.DivAll>)
}

export default Contacts