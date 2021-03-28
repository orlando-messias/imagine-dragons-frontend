// react
import React from 'react';
import { useHistory } from 'react-router';
// react-icons
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'
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
        <img src={avatar} className="cardAvatar" alt="Avatar" />
        <h3>{dragon.name}</h3>
      </div>

      <p className="cardPType">Type | Strong Point: <span className="cardSpanType">{dragon.type}</span></p>

      <div className="cardDescription">
        <p>Description</p>
        <p
          className="moreDetails"
          onClick={() => handleClick(dragon.id)}
        >
          ... more Details
        </p>
      </div>

      <div className="cardFooter">
        <p className="createdAt"><AiTwotoneCalendar /> {newFormatDate}</p>
        <div className="iconsFooter">
          <FaPencilAlt className="iconFooter" />
          <RiDeleteBin6Line className="iconFooter" />
        </div>
      </div>
    </div>
  );
};