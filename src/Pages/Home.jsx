// react
import React, { useEffect, useState } from 'react';
// components
import DragonCard from '../Components/DragonCard';
import ModalAdd from '../Components/ModalAdd';
import ModalDelete from '../Components/ModalDelete';
// react icons
import { BsPlusSquareFill } from 'react-icons/bs';
// services
import apiDragons from '../services/apiDragons';
import { isLogin } from '../services/loginServices';
// styles
import './HomeStyles.css';
import { useHistory } from 'react-router';
import UserBar from '../Components/UserBar';
import { sortDragonsByName } from '../services/cardsServices';


export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [modo, setModo] = useState('');
  const [idDragon, setIdDragon] = useState('');
  const [dragon, setDragon] = useState({});

  const history = useHistory();

  // checks if there's a user logged in
  useEffect(() => {
    (!isLogin())
      ? history.push('/')
      : apiDragons.get('/')
        .then(response => {
          const sortedDragons = sortDragonsByName(response.data);
          setDragons(sortedDragons);
        })
        .catch(e => console.log(e));
  }, [showModalAdd, showModalDelete]);

  // preloader while is fetching
  if (dragons.length === 0) {
    return (
      <div className="loading">LOADING...</div>
    );
  }

  const handleAddButtonClick = () => {
    setShowModalAdd(true);
    setModo('add');
  };

  return (
    <div className="homeContainer">
      <UserBar />
      <div className="homeHeader">
        <h2>DRAGONS CARDS</h2>
        <BsPlusSquareFill className="iconPlus" onClick={handleAddButtonClick} />
      </div>
      <div className="cardContainer">
        {dragons.map((dragon, index) => (
          <DragonCard
            key={index}
            dragon={dragon}
            setShowModalAdd={setShowModalAdd}
            modo={modo}
            setModo={setModo}
            idDragon={idDragon}
            setIdDragon={setIdDragon}
            setShowModalDelete={setShowModalDelete}
            setDragon={setDragon}
          />
        ))}

      </div>

      {showModalAdd && (
        <ModalAdd setShowModalAdd={setShowModalAdd} modo={modo} idDragon={idDragon} />
      )}
      {showModalDelete && (
        <ModalDelete setShowModalDelete={setShowModalDelete} dragon={dragon} />
      )}
    </div>
  );
};