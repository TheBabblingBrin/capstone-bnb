import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from './usermenu';

function UserDropdownButton() {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);
  const userMenu = useRef(null)

  const closeOpenMenus = (e)=>{
    if(userMenu.current && showMenu && !userMenu.current.contains(e.target)){
      setShowMenu(false)
    }
}


  // useEffect(() => {
  //   document.addEventListener('click', closeOpenMenus);
  //   return () => document.removeEventListener("click", closeOpenMenus);
  // }, [showMenu]);



  return (
      <div className='profile-button-container'ref={userMenu}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='profile-dropdown-button'
          ><i class="fa-sharp fa-solid fa-bars"></i>
            <div className='user-logo'>
            <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669680635/AirBnB/user_pic-50x50_napyep.png'></img>
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
