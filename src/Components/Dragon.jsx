// react
import React from 'react';
import { useHistory } from 'react-router';
// react-icons
import { AiTwotoneCalendar } from 'react-icons/ai'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
// styles
import './DragonStyles.css';
// images
import avatar from '../assets/dragon.jpg';


export default function Dragon({ dragon }) {
  // format date from createdAt
  const createdAt = dragon.createdAt.split('-');
  const day = createdAt[2].substr(0, 2);
  const month = createdAt[1];
  const year = createdAt[0];
  const newFormatDate = `${day}/${month}/${year}`;

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  }

  return (
    <div className="card">

      <div className="cardTitle">
        <img src={avatar} className="avatar" alt="Avatar" />
        <h3>{dragon.name}</h3>
      </div>

      <p>{dragon.type}</p>

      <div className="cardDescription">
        <p>Description</p>
        <p
          className="moreDetails"
          onClick={() => handleClick(dragon.id)}
        >
          ...more Details
        </p>
      </div>

      <div className="footer">
        <p className="createdAt"><AiTwotoneCalendar /> {newFormatDate}</p>
        <div>
          <GrEdit className="iconFooter" />
          <RiDeleteBin6Line className="iconFooter" />
        </div>
      </div>
    </div>
  );
};