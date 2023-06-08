import { useState } from 'react'
import * as css from '../All.styled';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../../redux/operations';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const name = useSelector(state => state.user.user.name)


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(LogIn({ email, password }))


        setEmail('')
        setPassword('')
    };

    return (
        <css.Container>
            <css.Login>
                <css.Title>Log in, {name}</css.Title>

                <css.Form onSubmit={handleSubmit}>
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


                    <css.SigninButton type="submit">Log in</css.SigninButton>

                    <css.HorizontalRule />
                </css.Form>
            </css.Login>
        </css.Container>
    );
};

export default LoginForm