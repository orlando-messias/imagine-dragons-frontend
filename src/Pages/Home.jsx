import React, { useEffect, useState } from 'react';
import DragonCard from '../Components/DragonCard';
import ModalAdd from '../Components/ModalAdd';
import apiDragons from '../services/apiDragons';

import { BsPlusSquareFill } from 'react-icons/bs';

import './HomeStyles.css'

export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);

  useEffect(() => {
    apiDragons.get('/')
      .then(response => setDragons(response.data))
      .catch(e => console.log(e));
  }, [showModalAdd]);

  // preloader while is fetching
  if (dragons.length === 0) {
    return (
      <div className="loading">LOADING...</div>
    );
  }

  const handleAddButtonClick = () => {
    setShowModalAdd(true);
  }

  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <h2>DRAGONS CARD</h2>
        <BsPlusSquareFill className="iconPlus" onClick={handleAddButtonClick} />
      </div>
      <div className="cardContainer">
        {dragons.map((dragon, index) => (
          <DragonCard key={index} dragon={dragon} />
        ))}

      </div>

      {showModalAdd && (
        <ModalAdd setShowModalAdd={setShowModalAdd} />
      )};
    </div>
  );
};