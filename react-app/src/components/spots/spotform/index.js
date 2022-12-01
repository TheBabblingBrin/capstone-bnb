import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SpotForm from './SpotForm';
import './index.css'

function SpotFormModal({update = null, spot}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={'modal-box-spot'}>
      <button className={'create-spot-button'} onClick={() => setShowModal(true)}>{update?<i className="fa-solid fa-pen-to-square"></i>:'New'}</button>
      {showModal &&(
        <Modal onClose={() => setShowModal(false)}>
          <SpotForm setShowModal={setShowModal} update={update} spot={spot}/>
        </Modal>
      )}
    </div>
  );
}

export default SpotFormModal;
