// react
import React, { useEffect, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, errorToFalse } from '../store/Login/Login.action';
// react-icons
import { BsFillShieldLockFill } from 'react-icons/bs';
// services
import { loginValidation } from '../services/loginServices';
// styles
import './LoginStyles.css';
import { useHistory } from 'react-router';


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

  useEffect(() => {
    loginValidation(userLogin.email)
      ? setErrorEmail(false)
      : setErrorEmail(true);

    loginValidation(userLogin.password)
      ? setErrorPassword(false) :
      setErrorPassword(true);
  }, [userLogin]);

  useEffect(() => {
    if (success) {
      localStorage.setItem('user', JSON.stringify(user));
      history.push('/home');
    }
    if (error) {
      setUserLogin({ email: '', password: '' });
      console.log('ERR ', errorMessage);
      dispatch(errorToFalse());
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
    console.log('HERE ', email, password);
    dispatch(loginUser(email, password))
  };

  // preloader while is fetching
  if (isFetching) {
    return (
      <div>
        <h3>LOADING...</h3>
      </div>
    );
  }

  return (
    <div className="pageContainer">
      <div className="loginContainer">
        <div className="icon">
          <BsFillShieldLockFill />
        </div>
        <p className="title">LOGIN</p>

        <div className="form">
          <div className="fields">
            <input
              name="email"
              type="text"
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
              placeholder="password *"
            />
          </div>

          <button
            className="formButton"
            onClick={login}
            disabled={
              !(loginValidation(userLogin.email) && loginValidation(userLogin.password))
            }
          >
            Login
        </button>
        </div>

      </div>
    </div>
  );
};