// react
import React from 'react';
// react icons
import { AiTwotoneCalendar } from 'react-icons/ai';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { GiSeaDragon } from 'react-icons/gi';
// styles
import './DragonDetailStyles.css';
// image
import dragonImg from '../assets/dragon.jpg';


export default function DragonDetail({ dragonDetails }) {

  const handleBackArrowClick = () => {
    window.history.back();
  }

  return (
    <div className="dragonDetailContainer">
      <div className="mainHeader">

        <img src={dragonImg} className="dragonImg" alt="Dragon" />

        <div className="header">
          <div className="headerTitles">
            <span className="headerIcon"><GiSeaDragon /></span>
            <h3 className="headerTitle"> Dragon Details</h3>
          </div>
          <div className="headerInfo">
            <p>{dragonDetails.name}</p>
            <span>{dragonDetails.type}</span>
          </div>
        </div>

      </div>

      <div className="backBox" onClick={handleBackArrowClick}>
        <IoChevronBackCircleSharp className="backArrow" />
        <span>back</span>
      </div>

      <div className="detailDescription">
        <p><b>- Description -</b></p>
        <p>
          All the information and details about <b>{dragonDetails.name
            && dragonDetails.name.toUpperCase()}</b>
        </p>
      </div>

      <div className="detailFooter">
        <div className="detailFooterCalendar">
          <AiTwotoneCalendar className="calendar" />
        </div>
        
        <span className="detailCreatedAt">{dragonDetails.createdAt &&
          `${dragonDetails.createdAt.split('-')[2].substr(0, 2)}/
            ${dragonDetails.createdAt.split('-')[1]}/
            ${dragonDetails.createdAt.split('-')[0]}`}</span>
      </div>

    </div>
  );
};