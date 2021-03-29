import React, { useEffect, useState } from 'react';
import apiDragons from '../services/apiDragons';

import './DetailStyles.css';
import DragonDetail from '../Components/DragonDetail';
import { isLogin } from '../services/loginServices';
import { useHistory } from 'react-router';
import UserBar from '../Components/UserBar';

export default function Detail({ match }) {
  const [dragonDetails, setDragonDetails] = useState({});

  // get the dragon id passed with url
  const id = match.params.id;

  const history = useHistory();

  // checks if there's a user logged in
  useEffect(() => {
    (!isLogin())
      ? history.push('/')
      : apiDragons.get(`/${id}`)
        .then(response => setDragonDetails(response.data))
        .catch(e => console.log(e));
  }, [id, history]);

  if (!dragonDetails) return <div>LOADING...</div>

  return (
    <div className="detailContainer">
      <UserBar />
      <DragonDetail dragonDetails={dragonDetails} />
    </div>

  )
}