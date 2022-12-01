import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingIndex from '../bookingindex/index'

function BookingModal() {
  const [showModal, setShowModal] = useState(false);

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
