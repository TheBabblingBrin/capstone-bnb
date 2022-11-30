import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserDropdownButton() {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false)
  const userMenu = useRef(null)
  let clickImage;

  const closeOpenMenus = (e)=>{
    if(servMenu.current && showMenu && !servMenu.current.contains(e.target)){
      setShowMenu(false)
      setClicked(false)
    }
}

  useEffect(() => {
    document.addEventListener('click', closeOpenMenus);
    return () => document.removeEventListener("click", closeOpenMenus);
  }, [showMenu]);

  const click = () =>{
    setShowMenu(!showMenu)
    setClicked(!clicked)
  }
  clicked? clickImage = <i className="fa-solid fa-x"></i>:clickImage = <i className="fa-solid fa-angle-down"></i>

  return (
      <div>
        <button
          ref={userMenu}
          className='profile-dropdown-button'
          ><i class="fa-sharp fa-solid fa-bars"></i>
            <div className='user-logo'>
            <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669680635/AirBnB/user_pic-50x50_napyep.png'></img>
          </div>
        </button>
      {/* {showMenu &&
          //dropdown component
      } */}
    </div>
  );
}

export default UserDropdownButton;
