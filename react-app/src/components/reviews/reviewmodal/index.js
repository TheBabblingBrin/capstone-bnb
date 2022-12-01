import React, { useState } from 'react';
import { Modal } from '../../context/Modal';


import { useDispatch } from "react-redux";
import ReviewForm from '../reviewform';



function ReviewFormModal({spotId}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={'review-modal-wrapper'}>
      <button className={'review-modal-button'} onClick={() => setShowModal(true)}>Leave a review</button>
      {showModal &&(
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm setShowModal={setShowModal} spotId={spotId}/>
        </Modal>
      )}
    </div>
  );
}

export default ReviewFormModal;
