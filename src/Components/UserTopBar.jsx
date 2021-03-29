// react
import React, { useState } from 'react';
import { useHistory } from 'react-router';
// redux
import { useDispatch } from 'react-redux';
import { userLogout } from '../store/Login/Login.action';
// react icons
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
//styles
import './UserTopBarStyles.css';

export default function UserTopBar() {
  // local state
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('loggedUser')) || null;

  const handleMenuLogoutClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem('loggedUser');
    history.push('/');
  };

  return (
    <div className="userBarContainer">

      <div>
        <span>Welcome, {user
          && user.username[0].toUpperCase() + user.username.slice(1)}
        </span>
        <span className="userIcon" onClick={handleMenuLogoutClick} ><FaUserAlt />
          <p
            onMouseOut={handleMenuLogoutClick}
            className={`menuLogout ${showMenu ? 'showMenu' : ''}`}
            onClick={handleLogout}
          >
            <IoLogOutSharp /> <span>Logout</span>
          </p>
        </span>
      </div>

    </div>
  );
};