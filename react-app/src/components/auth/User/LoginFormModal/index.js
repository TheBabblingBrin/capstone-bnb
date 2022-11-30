import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import { useDispatch } from "react-redux";



function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='modal-box'>
      <button className='user-menu-button' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
