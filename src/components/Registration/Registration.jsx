import React, { useState } from 'react'
import * as css from '../All.styled';
import { useDispatch } from 'react-redux';
import { Registration } from '../../redux/operations';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(Registration({ name, email, password }))

        setName('')
        setEmail('')
        setPassword('')
    };

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