import React from 'react'
import * as css from '../All.styled';
import ContactForm from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

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