import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import LoginFormModal from '../LoginFormModal';
import {logout} from '../../../../store/session'

function UserMenu({setShowMenu}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  return (
      <div className='user-menu' >
      {!user &&
      <>
        <LoginFormModal />
        <LoginFormModal location={'Sign up'}/>

      </>
      }

      {user &&
      <>
        <button
          className='user-menu-button'
          onClick={()=> dispatch(logout())}
        >Log Out</button>
      </>
      }
      </div>
  );
}

export default UserMenu;
