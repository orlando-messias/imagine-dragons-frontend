// react
import React from 'react';
// react icons
import { MdDelete } from 'react-icons/md';
// services
import apiDragons from '../services/apiDragons';
// styles
import './ModalDeleteStyles.css';


export default function ModalDelete({ setShowModalDelete, dragon }) {

  const handleCloseModal = () => {
    setShowModalDelete(false);
  };

  const handleDelete = () => {
    apiDragons.delete(`/${dragon.id}`)
      .then(() => setShowModalDelete(false))
      .catch(e => console.log(e));
  };

  return (
    <div className="modalDelete">
      <div className="modalDeleteContainer">

        <div className="modalDeleteHeader">
          <h2>Delete Dragon</h2>
        </div>

        <div className="content">
          <span className="contentIcon"><MdDelete /></span>
          <span>Are you sure you want to remove <b>{dragon.name}</b>?</span>
        </div>

        <div className="modalDeleteFooter">
          <button
            className="modalButton"
            onClick={handleDelete}
          >
            Sure, delete it
          </button>
          <button
            className="modalButton"
            onClick={handleCloseModal}
          >
            Nope
          </button>
        </div>

      </div>
    </div>
  )
};