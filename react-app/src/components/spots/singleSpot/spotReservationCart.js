import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import BookingForm from '../../bookings/bookingform';
import '.././index.css'




const ReservationCart = ({spot,spotrating}) =>{
  const dispatch = useDispatch()
  const [owned, setOwned] = useState(false)
  const user = useSelector(state => state.session.user)


  useEffect(()=>{
    setOwned(false)
    if(user){
      if(user.id === spot.owner.id){
        setOwned(true)
      }}


  },[dispatch, user, spot.owner.id])

  return(

    <div className='cart-wrapper'>
      <div className='cart-top'>
        <div className='cart-spot-info'>
          <div>
            <span className='cart-price-night'>${spot.price}</span>
            <span> night</span>
          </div>
          <div>
            <span>★ {spotrating}</span>
            <span> · </span>
            <span>{spot.reviews.length} reviews</span>
          </div>
        </div>
        {!owned &&

          <BookingForm spot={spot}/>
        }
      </div>


    </div>



  )

}

export default ReservationCart
