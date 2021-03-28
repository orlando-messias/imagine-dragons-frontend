// react
import React from 'react';
// react icons
import { AiTwotoneCalendar } from 'react-icons/ai';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import { BiDetail } from 'react-icons/bi';
// styles
import './DragonDetailStyles.css';
// image
import dragonImg from '../assets/dragon.jpg';


export default function DragonDetail({ dragonDetails }) {

  const handleBackArrow = () => {
    window.history.back();
  }

  return (
    <div className="dragonDetailContainer">
      <div className="mainHeader">

        <img src={dragonImg} className="dragonImg" alt="Dragon" />

        <div className="header">
          <div className="headerTitles">
            <span className="headerIcon"><BiDetail /></span>
            <h3 className="headerTitle"> Dragon Details</h3>
          </div>
          <div className="headerInfo">
            <p>{dragonDetails.name}</p>
            <span>{dragonDetails.type}</span>
          </div>
        </div>

      </div>

      <div className="back" onClick={handleBackArrow}>
        <IoChevronBackCircleSharp className="backArrow" />
        <span>back</span>
      </div>

      <div className="detailDescription">
        <p>Description</p>
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