import React, { useEffect, useState } from 'react';
import Dragon from '../Components/Dragon';
import apiDragons from '../services/apiDragons';

import './Home.css'

export default function Home() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    apiDragons.get('/')
      .then(response => setDragons(response.data))
      .catch(e => console.log(e));
  }, []);

  if(dragons.length === 0) return <div>LOADING...</div>


  return (
    <div className="homeContainer">
      <h2>DRAGONS CARD</h2>
      <div className="cardContainer">
        {dragons.map((dragon, index) => (
          <Dragon key={index} dragon={dragon} />
        ))}

      </div>
    </div>
  );
};