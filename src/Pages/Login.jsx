// react
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, errorToFalse } from '../store/Login/Login.action';
// react-icons
import { BsFillShieldLockFill } from 'react-icons/bs';
import { GiSeaDragon } from 'react-icons/gi';
// services
import {
  passwordValidation,
  emailValidation,
  isLogin
} from '../services/loginServices';
// styles
import './LoginStyles.css';


export default function Login() {
  // local states
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);

  // get data from store
  const user = useSelector(state => state.loginReducer.user);
  const success = useSelector(state => state.loginReducer.success);
  const isFetching = useSelector(state => state.loginReducer.isFetching);
  const error = useSelector(state => state.loginReducer.error);
  const errorMessage = useSelector(state => state.loginReducer.message);

  const dispatch = useDispatch();

  const history = useHistory();

  // checks if there's a user logged in
  useEffect(() => {
    if (isLogin()) history.push('/home');
  }, [history]);

  useEffect(() => {
    emailValidation(userLogin.email)
      ? setErrorEmail(false)
      : setErrorEmail(true);

    passwordValidation(userLogin.password)
      ? setErrorPassword(false) :
      setErrorPassword(true);
  }, [userLogin]);

  useEffect(() => {
    if (success) {
      localStorage.setItem('loggedUser', JSON.stringify(user));
      history.push('/home');
    }
    if (error) {
      setUserLogin({ email: '', password: '' });
      console.log('ERR ', errorMessage);
    }
  }, [success, error, dispatch]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUserLogin(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const login = () => {
    const { email, password } = userLogin;
    dispatch(errorToFalse());
    dispatch(loginUser(email, password))
  };

  // preloader while is fetching
  if (isFetching) {
    return (
      <div className="loading">LOADING...</div>
    );
  }

  return (
    <div className="pageContainer">
      <div className="loginContainer">

        <div className="icon">
          <GiSeaDragon />
        </div>

        <p className="title">LOGIN</p>

        <div className="form">
          <div className="fieldsBox">
            <input
              name="email"
              type="text"
              autoFocus
              value={userLogin.email}
              onChange={handleInputChange}
              className={`field ${errorEmail ? 'error' : 'noError'}`}
              placeholder="email *"
            />
            <input
              name="password"
              type="password"
              value={userLogin.password}
              onChange={handleInputChange}
              className={`field ${errorPassword ? 'error' : 'noError'}`}
              placeholder="password no spaces allowed"
            />
          </div>

          {error && <span className="errorSpan">{errorMessage}</span>}

          <button
            className="formButton"
            onClick={login}
            disabled={
              !(emailValidation(userLogin.email) && passwordValidation(userLogin.password))
            }
          >
            Login
        </button>
        </div>
      </div>
    </div>
  );
};