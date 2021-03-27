import React from 'react';
import { BsFillShieldLockFill } from 'react-icons/bs';

import './LoginStyles.css';

export default function Login() {
  return (
    <div className="pageContainer">
      <div className="loginContainer">
        <div className="icon">
          <BsFillShieldLockFill />
        </div>
        <p className="title">LOGIN</p>

        <div className="form">
          <div className="fields">
            <input type="text" className="field" placeholder="username" />
            <input type="password" className="field" placeholder="password" />
          </div>

          <button
            className="formButton"
          >
            Login
        </button>
        </div>

      </div>
    </div>
  );
};