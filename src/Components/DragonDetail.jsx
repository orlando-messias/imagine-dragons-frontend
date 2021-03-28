// react
import React from 'react';
// styles
import './DragonDetailStyles.css';
// image
import dragonImg from '../assets/dragon.jpg';


export default function DragonDetail({ dragonDetails }) {
  return (
    <div className="dragonDetailContainer">
      <div className="mainHeader">
        <img src={dragonImg} className="dragonImg" alt="Dragon" />
        <div className="fire">
          <h3 className="detailTitle">Details Page</h3>
          <div className="header">
            <p>{dragonDetails.name}</p>
            <span>{dragonDetails.type}</span>
          </div>
        </div>

      </div>
      <div className="detailDescription">
        <p>Description</p>
      </div>
      <div>
        <span className="detailCreatedAt">{dragonDetails.createdAt &&
          `${dragonDetails.createdAt.split('-')[2].substr(0, 2)}/
            ${dragonDetails.createdAt.split('-')[1]}/
            ${dragonDetails.createdAt.split('-')[0]}`}</span>
      </div>
    </div>
  );
};