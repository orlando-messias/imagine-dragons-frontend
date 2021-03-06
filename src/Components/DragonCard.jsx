// react
import React from 'react';
import { useHistory } from 'react-router';
// react-icons
import { AiTwotoneCalendar } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
// styles
import './DragonCardStyles.css';
// images
import avatar from '../assets/dragon.jpg';


export default function DragonCard({ dragon,
  setShowModalAdd,
  setShowModalDelete,
  setDragon,
  setModo,
  setIdDragon }) {

  // format date from dragon createdAt
  const createdAt = dragon.createdAt.split('-');
  const day = createdAt[2].substr(0, 2);
  const month = createdAt[1];
  const year = createdAt[0];
  const newFormatDate = `${day}/${month}/${year}`;

  const history = useHistory();

  const handleClickDetails = (id) => {
    history.push(`/detail/${id}`);
  };

  const handleEditButtonClick = (id) => {
    setShowModalAdd(true);
    setIdDragon(id);
    setModo('edit');
  };

  const handleDeleteButtonClick = (dragon) => {
    setShowModalDelete(true);
    setDragon(dragon);
    console.log(dragon);
  }

  return (
    <div className="card">

      <div className="cardTitle">
        <img src={avatar} className="cardAvatar" alt="Avatar" />
        <h3>{dragon.name}</h3>
      </div>

      <p className="cardPType">
        Type | Strong Point: <span className="cardSpanType">{dragon.type}</span>
      </p>

      <div className="cardDescription">
        <p>Description</p>
        <p
          className="moreDetails"
          onClick={() => handleClickDetails(dragon.id)}
        >
          ... more Details
        </p>
      </div>

      <div className="cardFooter">
        <p className="createdAt"><AiTwotoneCalendar /> {newFormatDate}</p>
        <div className="iconsFooterBox">
          <FaPencilAlt className="iconFooter" onClick={() => handleEditButtonClick(dragon.id)} />
          <RiDeleteBin6Line className="iconFooter" onClick={() => handleDeleteButtonClick(dragon)} />
        </div>
      </div>
    </div>
  );
};