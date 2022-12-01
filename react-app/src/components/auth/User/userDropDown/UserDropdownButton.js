import React, { useState,useRef } from 'react';
import UserMenu from './usermenu';

function UserDropdownButton() {
  const [showMenu, setShowMenu] = useState(false);
  const userMenu = useRef(null)




  return (
      <div className='profile-button-container'ref={userMenu}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='profile-dropdown-button'
          ><i className="fa-sharp fa-solid fa-bars"></i>
            <div className='user-logo'>
            <img alt='user-logo' src='https://res.cloudinary.com/degkakjou/image/upload/v1669680635/AirBnB/user_pic-50x50_napyep.png'></img>
          </div>
        </button>
      {showMenu &&(
        <UserMenu setShowMenu={setShowMenu}/>
      )
      }
    </div>
  )
}

export default UserDropdownButton;
