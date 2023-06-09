import React from 'react'
import * as css from '../All.styled';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';

const NavLinks = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    return (
        <>
            {!isLoggedIn ?
                <>
                    <css.UserMenuEmail>
                        <css.RegistrationButton to="/registration">Registration</css.RegistrationButton>
                    </css.UserMenuEmail>
                    <css.UserMenuEmail>
                        <css.LoginButton to="/login">Log in</css.LoginButton>
                    </css.UserMenuEmail>
                </> : <UserMenu />}
        </>
    )
}

export default NavLinks


