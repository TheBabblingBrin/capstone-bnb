import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingIndex from '../bookingindex/index'
import { useDispatch } from "react-redux";

function BookingModal({}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={'booking-box-spot'}>
      <button className={'bookings-button'} onClick={() => setShowModal(true)}>Your Trips</button>
      {showModal &&(
        <Modal onClose={() => setShowModal(false)}>
          <BookingIndex />
        </Modal>
      )}
    </div>
  );
}

export default BookingModal;
