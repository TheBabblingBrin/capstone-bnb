import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


function LoginFormModal({closeOpenMenus, location = null, setShowMenu, showMenu}) {
  const [showModal, setShowModal] = useState(false);
  const showThings = () => {
    document.removeEventListener("click", closeOpenMenus)
    setShowModal(true)
  }
  return (
    <div className={location==='Reserve'? 'booking-button-wrapper':'modal-box'}>
      <button className={location==='Reserve'? 'create-booking-submit':'user-menu-button'}
      onClick={() => showThings()}>
        {location? location:'Login'}
      </button>
      {showModal && !location &&(
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      {showModal && location &&(
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} location={location}/>
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
