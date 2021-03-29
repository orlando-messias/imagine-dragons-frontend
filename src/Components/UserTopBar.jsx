// react
import React, { useState } from 'react';
// react icons
import { FaUserAlt } from 'react-icons/fa';
import { IoLogOutSharp } from 'react-icons/io5';
//styles
import './UserTopBarStyles.css';

export default function UserTopBar() {
  const [showMenu, setShowMenu] = useState(false);

  const ROOT_URL = 'http://localhost:3000/';

  const user = JSON.parse(localStorage.getItem('user')) || null;

  const handleMenuLogout = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = ROOT_URL;
  };

  return (
    <div className="userBarContainer">
      <div>
        <span>Welcome, {user
          && user.username[0].toUpperCase() + user.username.slice(1)}
        </span>
        <span className="userIcon" onClick={handleMenuLogout} ><FaUserAlt />
          <p
            onMouseOut={handleMenuLogout}
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