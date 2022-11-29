import { useHistory } from 'react-router-dom';
import '../index.css'
const NavBar = () =>{
  const history = useHistory()
return(
  <div className="nav-bar">
    <div className='nav-left'>

    <div className='logo-button-container'>
    <input
    className='logo-button'
    type='image'
    src='https://res.cloudinary.com/degkakjou/image/upload/v1669675017/AirBnB/clipart2562521_bymb0p.png'
    onClick={()=> history.push('/')}></input>
    </div>
    </div>
    <div className='nav-center'></div>
    <div className='nav-right'>
      <div className='profile-button-container'>
        <button
        className='profile-dropdown-button'
        ><i class="fa-sharp fa-solid fa-bars"></i>
        <div className='user-logo'>
        <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669680635/AirBnB/user_pic-50x50_napyep.png'></img>
        </div>
        </button>
      </div>
    </div>
  </div>
)
}

export default NavBar
