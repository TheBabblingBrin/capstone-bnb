import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import LoginFormModal from '../LoginFormModal';
import {logout} from '../../../../store/session'

function UserMenu({setShowMenu, showMenu, closeOpenMenus}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const goToUser = () =>{
    setShowMenu(false)
    history.push('/user')
  }

  const logOut = () =>{
    setShowMenu(false)
    dispatch(logout())

  }
  return (
      <div className='user-menu' >
      {!user &&
      <>
        <LoginFormModal closeOpenMenus={closeOpenMenus} setShowMenu={setShowMenu} showMenu={showMenu}/>
        <LoginFormModal closeOpenMenus={closeOpenMenus} location={'Sign up'} setShowMenu={setShowMenu} showMenu={showMenu}/>

      </>
      }

      {user &&
      <>
        <button
          className="user-menu-button"
          onClick={() => goToUser()}>
            Account
          </button>
        <button
          className='user-menu-button'
          onClick={()=> logOut() }
        >Log Out</button>
      </>
      }
      </div>
  );
}

export default UserMenu;
