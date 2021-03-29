// react
import React, { useState, useEffect } from 'react';
// react icons
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaFileAlt } from 'react-icons/fa';
// services
import apiDragons from '../services/apiDragons';
import { modalValidation } from '../services/modalServices';
// styles
import './ModalAddStyles.css';


export default function ModalAdd({ setShowModalAdd, modo, idDragon }) {
  // local states
  const [dragon, setDragon] = useState({
    name: '',
    type: '',
    createdAt: new Date(),
    histories: []
  });
  const [errorName, setErrorName] = useState(true);
  const [modified, setModified] = useState(false);

  // checks if typed dragon name is valid
  useEffect(() => {
    modalValidation(dragon.name)
      ? setErrorName(false)
      : setErrorName(true);

  }, [dragon]);

  useEffect(() => {
    if (modo === 'edit')
      apiDragons.get(`/${idDragon}`)
        .then(response => setDragon(response.data))
        .catch(e => console.log(e));
  }, [])

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDragon(prevState => ({
      ...prevState,
      [name]: value
    }));
    setModified(true);
  };

  const handleAddNew = () => {
    if (modo === 'add') {
      apiDragons.post('/', dragon)
        .then(() => setShowModalAdd(false))
        .catch(e => console.log(e));
    }

    if (modo === 'edit') {
      apiDragons.put(`/${dragon.id}`, dragon)
        .then(() => setShowModalAdd(false))
        .catch(e => console.log(e));
    }
  };

  const handleCloseModal = () => {
    setShowModalAdd(false);
  };

  return (
    <div className="modalAdd">
      <div className="modalContainer">

        <div className="modalHeader">
          <h2>{modo === 'add' ? 'New Dragon' : 'Edit Dragon'}</h2>
          <AiFillCloseCircle className="closeIcon" onClick={handleCloseModal} />
        </div>

        <div className="contentP">
          <span className="contentPIcon"><FaFileAlt /> </span>
          <span>{modo === 'add' ? 'Register a new Dragon' : `Editing ${dragon.name}`}</span>
        </div>

        <div className="modalFields">
          <input
            type="text"
            name="name"
            autoFocus
            value={dragon.name}
            onChange={handleInputChange}
            className="field"
            className={`field ${errorName ? 'error' : 'noError'}`}
            placeholder="Dragon Name"
          />
          <select
            name="type"
            value={dragon.type}
            onChange={handleInputChange}
            className="select"
            placeholder="Dragon Type"
          >
            <option value="">Select Type</option>
            <option value="Fire">Fire</option>
            <option value="Thunder">Thunder</option>
            <option value="Vampire">Vampire</option>
            <option value="Wind">Wind</option>
          </select>
        </div>

        <div className="modalFooter">
          <button
            className="modalButton"
            onClick={handleAddNew}
            disabled={
              !(modalValidation(dragon.name) && modalValidation(dragon.type)
                && modified)
            }
          >
            {modo === 'add' ? 'Add New' : 'Change'}
          </button>
        </div>

      </div>
    </div>
  )
};