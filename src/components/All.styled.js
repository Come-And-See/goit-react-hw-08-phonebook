import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DivAll = styled.div`
  background: #f0f0f0;
  width: 450px;
  border: 1px solid #000;
  border-radius: 15px;
  margin: 50px auto;
  padding: 15px;

  h1,
  h2,
  h3 {
    text-align: center;
  }
`;

export const DivContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 600;
  }
  input {
    border: 1px solid;
    height: 30px;
    border-radius: 5px;
    margin-top: 5px;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    &:hover {
      background-color: #cbcbcb;
    }
  }
`;

export const UlContactList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 15px;
    font-size: 20px;
    border-bottom: 1px dashed;
    padding-bottom: 10px;
    align-items: center;
  }
  button {
    margin-left: 21px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #cbcbcb;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  width: 100%;
`;

export const Nav = styled.nav`
  padding: 25px 15px;
  border-bottom: 1px solid #d6d1d1;
  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  margin-bottom: 5px;
  text-align: right;
`;

export const Button = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #333333;
  font-size: 18px;
  text-decoration: none;
  border: 1px solid #333333;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

export const RegistrationButton = styled(Button)`
  margin-right: 10px;
`;

export const LoginButton = styled(Button)``;
export const LogOutButton = styled(Button)``;

export const Container = styled.div`
  /* background-color: #d3d3d3; */

  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const Login = styled.div`
  font-size: 18px;
  position: relative;
  border-radius: 25px;
  height: 450px;
  width: 405px;
  margin: auto;
  padding: 60px 60px;
  background: url(https://picsum.photos/id/1004/5616/3744) no-repeat center
    center #505050;
  background-size: cover;
  box-shadow: 0px 30px 60px -5px #000;
`;

export const Form = styled.form`
  padding-top: 20px;
`;

export const Title = styled.h2`
  padding-left: 12px;
  font-size: 22px;
  text-transform: uppercase;
  padding-bottom: 5px;
  letter-spacing: 2px;
  display: block;
  text-align: center;
  font-weight: 600;

  &:first-child {
    padding-left: 0px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputU = styled.input`
  border: none;
  width: 89%;
  padding: 10px 20px;
  font-size: 18px;
  display: block;
  height: 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  margin-top: 15px;
  transition: all 0.5s ease-in-out;
  /* font-family: 'Montserrat', sans-serif; */
  color: #fff;

  &:focus {
    outline: 0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    background: rgba(0, 0, 0, 0);
  }
`;

export const InputLabel = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.4;
  display: inline-block;
  position: relative;
  top: -65px;
  transition: all 0.5s ease-in-out;
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  padding-top: 20px;
`;

export const CustomCheckbox = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 2px;
  display: inline-block;
  position: relative;
  top: 6px;

  &:checked {
    background-color: rgba(17, 97, 237, 1);
  }

  &:checked:after {
    content: '\2714';
    font-size: 10px;
    position: absolute;
    top: 1px;
    left: 4px;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
  padding-top: 10px;
  padding-left: 5px;
`;

export const SigninButton = styled.button`
  background-color: #1161ed;
  color: #fff;
  font-size: 18px;
  width: 100%;
  padding: 10px 20px;
  display: block;
  height: 39px;
  border-radius: 20px;
  margin-top: 30px;

  border: none;

  font-weight: 600;
  letter-spacing: 1.8px;

  &:hover {
    background: #4082f5;

    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const HorizontalRule = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.1);
  top: 50px;
  position: relative;
`;

export const ForgotPasswordLink = styled.a`
  text-align: center;
  display: block;
  top: 120px;
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.2);
`;


export const UserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  align-items: center;
`;
export const UserMenuEmail = styled.p`
  font-size: 18px;
  font-weight: 600;
`;