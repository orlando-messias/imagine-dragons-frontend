// react
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// components
import UserTopBar from '../Components/UserTopBar';
import DragonCard from '../Components/DragonCard';
import ModalAdd from '../Components/ModalAdd';
import ModalDelete from '../Components/ModalDelete';
// react icons
import { BsPlusSquareFill } from 'react-icons/bs';
// services
import apiDragons from '../services/apiDragons';
import { isLogin } from '../services/loginServices';
import { sortDragonsByName } from '../services/cardsServices';
// styles
import './HomeStyles.css';


export default function Home() {
  // local states
  const [dragons, setDragons] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [modo, setModo] = useState('');
  const [idDragon, setIdDragon] = useState('');
  const [dragon, setDragon] = useState({});

  const history = useHistory();

  // checks if there's a user logged in
  useEffect(() => {
    if (!isLogin()) {
      history.push('/');
    } else {
      setIsFetching(true);
      apiDragons.get('/')
        .then(response => {
          const sortedDragons = sortDragonsByName(response.data);
          setDragons(sortedDragons);
          setIsFetching(false);
        })
        .catch(e => console.log(e));
    }

  }, [showModalAdd, showModalDelete]);

  // preloader while is fetching
  if (dragons.length === 0 && isFetching) {
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
      <UserTopBar />
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
            setShowModalDelete={setShowModalDelete}
            setDragon={setDragon}
            setModo={setModo}
            setIdDragon={setIdDragon}
          />
        ))}

      </div>

      {dragons.length === 0 &&
        <p>No Dragons in Database</p>
      }

      {showModalAdd && (
        <ModalAdd
          setShowModalAdd={setShowModalAdd}
          modo={modo}
          idDragon={idDragon}
        />
      )}

      {showModalDelete && (
        <ModalDelete
          setShowModalDelete={setShowModalDelete}
          dragon={dragon} />
      )}

    </div>
  );
};