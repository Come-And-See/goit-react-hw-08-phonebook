import React from 'react'
import * as css from '../All.styled';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../../redux/operationsUser';

const UserMenu = () => {
    const email = useSelector(state => state.user.user?.email)
    const dispatch = useDispatch()
    return (
        <>
            <css.UserMenuEmail><css.LogOutButton to='/contacts'>Book Contacts</css.LogOutButton></css.UserMenuEmail>
            <css.UserMenu>

                <css.UserMenuEmail>{email}</css.UserMenuEmail>
                <css.LogOutButton type='button' onClick={() => dispatch(LogOut())}>Log Out</css.LogOutButton>

            </css.UserMenu>
        </>

    )
}

export default UserMenu