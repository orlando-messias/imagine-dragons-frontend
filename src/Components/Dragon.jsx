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
  // get date information
  const createdDate = dragon.createdAt.split('-');
  const day = createdDate[2].split('T')[0];
  const month = createdDate[1];
  const year = createdDate[0];

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/detail/${id}`);
  };


  return (
    <div className="card">

      <div className="cardTitle">
        <img src={avatar} className="avatar" alt="Avatar" />
        <h3>{dragon.name}</h3>
      </div>

      <p>{dragon.type}</p>

      <div className="cardDescription">
        <p>Description</p>
        <p className="moreDetails" onClick={() => handleClick(dragon.id)}>...more Details</p>
      </div>


      <div className="footer">
        <p className="createdAt"><AiTwotoneCalendar /> {`${day}/${month}/${year}`}</p>
        <div>
          <GrEdit className="iconFooter" />
          <RiDeleteBin6Line className="iconFooter" />
        </div>
      </div>
    </div>
  );
};