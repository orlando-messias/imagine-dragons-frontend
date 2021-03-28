import React, { useEffect, useState } from 'react';
import apiDragons from '../services/apiDragons';

import './DetailStyles.css';
import DragonDetail from '../Components/DragonDetail';

export default function Detail({ match }) {
  const [dragonDetails, setDragonDetails] = useState({});

  // get the dragon id passed with url
  const id = match.params.id;

  useEffect(() => {
    apiDragons.get(`/${id}`)
      .then(response => setDragonDetails(response.data))
      .catch(e => console.log(e));
  }, [id]);

  if(!dragonDetails) return <div>LOADING...</div>

  return (
    <div className="detailContainer">
        <DragonDetail dragonDetails={dragonDetails} />
    </div>
  )
}