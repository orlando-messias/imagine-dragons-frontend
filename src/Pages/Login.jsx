// react
import React, { useEffect, useState } from 'react';

// react-icons
import { BsFillShieldLockFill } from 'react-icons/bs';

// services
import { loginValidation } from '../services/loginServices';

// styles
import './LoginStyles.css';


// LOGIN COMPONENT
export default function Login() {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  });
  const [errorUsername, setErrorUsername] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);

  useEffect(() => {
    loginValidation(userLogin.username) ? setErrorUsername(false) : setErrorUsername(true)
    loginValidation(userLogin.password) ? setErrorPassword(false) : setErrorPassword(true)
  }, [userLogin]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(userLogin.username)
    setUserLogin(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



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
              name="username"
              type="text"
              onChange={handleInputChange}
              className={`field ${errorUsername ? 'error' : 'noError'}`}
              placeholder="username *"
            />
            <input
              name="password"
              type="password"
              onChange={handleInputChange}
              className={`field ${errorPassword ? 'error' : 'noError'}`}
              placeholder="password *" />
          </div>

          <button
            className="formButton"
            disabled={
              !(loginValidation(userLogin.username) && loginValidation(userLogin.password))
            }
          >
            Login
        </button>
        </div>

      </div>
    </div>
  );
};