import React, { useState } from 'react'
import * as css from '../../components/All.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Registration } from '../../redux/operationsUser';
import { Navigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Registration({ name, email, password }))

        setName('')
        setEmail('')
        setPassword('')
    };

    if (isLoggedIn) {
        return <Navigate to="/contacts" replace={true} />;
    }

    return (
        <css.Container>
            <css.Login>
                <css.Title>Registration</css.Title>

                <css.Form onSubmit={handleSubmit}>
                    <css.InputWrapper>
                        <css.InputU
                            type="text"
                            className="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <css.InputLabel>Name</css.InputLabel>
                    </css.InputWrapper>
                    <css.InputWrapper>
                        <css.InputU
                            type="text"
                            className="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <css.InputLabel>Email</css.InputLabel>
                    </css.InputWrapper>
                    <css.InputWrapper>
                        <css.InputU
                            type="password"
                            className="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <css.InputLabel>password</css.InputLabel>
                    </css.InputWrapper>


                    <css.SigninButton type="submit">Registration</css.SigninButton>

                    <css.HorizontalRule />
                </css.Form>
            </css.Login>
        </css.Container>
    );
};

export default RegistrationForm