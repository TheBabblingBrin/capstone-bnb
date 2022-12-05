import React, { useState,useRef, useEffect } from 'react';
import UserMenu from './usermenu';

function UserDropdownButton() {
  const [showMenu, setShowMenu] = useState(false);
  const userMenu = useRef(null)

  const closeOpenMenus = (e)=>{
    if(userMenu.current && showMenu && !userMenu.current.contains(e.target)){
      setShowMenu(false)
    }
}

  useEffect(() => {
    document.addEventListener('click', closeOpenMenus);
    return () => document.removeEventListener("click", closeOpenMenus);
  }, [showMenu, closeOpenMenus]);



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
        <UserMenu setShowMenu={setShowMenu} closeOpenMenus={closeOpenMenus} showMenu={showMenu}/>
      )
      }
    </div>
  )
}

export default UserDropdownButton;
