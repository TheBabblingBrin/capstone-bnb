import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import { useDispatch } from "react-redux";



function LoginFormModal({signup = false}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className='modal-box'>
      <button className='user-menu-button' onClick={() => setShowModal(true)}>{signup? 'Sign up':'Login'}</button>
      {showModal && !signup &&(
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
      {showModal && signup &&(
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
