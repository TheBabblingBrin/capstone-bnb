import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import LoginFormModal from '../LoginFormModal';
import {logout} from '../../../../store/session'

function UserMenu({setShowMenu}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const history = useHistory()

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
          className="user-menu-button"
          onClick={() => history.push('/user')}>
            Account
          </button>
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
