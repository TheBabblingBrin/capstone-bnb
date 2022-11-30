import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import LoginFormModal from '../LoginFormModal';
import {logout} from '../../../../store/session'

function UserMenu({closeMenu}) {
  const dispatch = useDispatch()


  return (
      <div className='user-menu' >

        <LoginFormModal />

        <button className='user-menu-button'>Signup</button>
        <button
          className='user-menu-button'
          onClick={()=> dispatch(logout())}
        >Log Out</button>

      </div>
  );
}

export default UserMenu;
