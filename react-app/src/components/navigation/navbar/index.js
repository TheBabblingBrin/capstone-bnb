import { useHistory } from 'react-router-dom';
import UserDropdownButton from '../../auth/User/userDropDown/UserDropdownButton';
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
        <UserDropdownButton />
    </div>
  </div>
)
}

export default NavBar
