import { useHistory } from 'react-router-dom'
import './index.css'

const NotFound = ()=>{
const history= useHistory()


  return(
    <div className="not-found-wrapper">
      <div className='image-404'>
        <img alt='404' src='https://res.cloudinary.com/degkakjou/image/upload/v1669930159/AirBnB/DALL_E_2022-12-01_16.27.49_-_home_not_found_404_logo_air_bnb_vztrde.png'/>
      </div>
      <div className='content-404'>
        <h2>Oops! Looks like the page you are looking for is having some difficulties.</h2>
        <button
        onClick={()=> history.push('/')}
        >Try Going Home</button>
      </div>
    </div>
  )
}
export default NotFound
