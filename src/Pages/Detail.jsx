// react
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// components
import UserTopBar from '../Components/UserTopBar';
import DragonDetail from '../Components/DragonDetail';
// services
import { isLogin } from '../services/loginServices';
import apiDragons from '../services/apiDragons';
// styles
import './DetailStyles.css';


export default function Detail({ match }) {
  // local state
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

  return (
    <div className="detailContainer">
      <UserTopBar />
      <DragonDetail dragonDetails={dragonDetails} />
    </div>
  );
};