import React, { useState, useEffect } from 'react';


import { AiFillCloseCircle } from 'react-icons/ai';
import apiDragons from '../services/apiDragons';
import { modalValidation } from '../services/modalServices';

import './ModalAddStyles.css';

export default function ModalAdd({ setShowModalAdd }) {
  const [dragon, setDragon] = useState({
    name: '',
    type: '',
    createdAt: new Date(),
    histories: []
  });
  const [errorName, setErrorName] = useState(true);

  useEffect(() => {
    modalValidation(dragon.name)
      ? setErrorName(false)
      : setErrorName(true);

  }, [dragon]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDragon(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(dragon)
  };

  const handleAddNew = () => {
    apiDragons.post('/', dragon)
      .then(() => {
        handleCloseModal(false);
      })
      .catch(e => console.log(e))
  }

  const handleCloseModal = () => {
    setShowModalAdd(false);
  };

  return (
    <div className="modalAdd">
      <div className="modalContainer">
        <div className="modalAddHeader">
          <h2>New Dragon</h2>
          <AiFillCloseCircle className="closeIcon" onClick={handleCloseModal} />
        </div>
        <div className="modalFields">
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            className="field"
            className={`field ${errorName ? 'error' : 'noError'}`}
            placeholder="Dragon Name"
          />
          <select
            name="type"
            onChange={handleInputChange}
            className="select"
            placeholder="Dragon Type"
          >
            <option value="">Select</option>
            <option value="Fire">Fire</option>
            <option value="Thunder">Thunder</option>
            <option value="Vampire">Vampire</option>
            <option value="Wind">Wind</option>
          </select>
        </div>
        <div className="modalFooter">
          <button
            className="modalAddButton"
            onClick={handleAddNew}
            disabled={
              !(modalValidation(dragon.name) && modalValidation(dragon.type))
            }
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  )
};