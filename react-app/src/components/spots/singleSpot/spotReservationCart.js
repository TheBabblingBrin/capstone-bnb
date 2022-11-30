import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import BookingForm from '../../bookings/bookingform';
import '.././index.css'




const ReservationCart = ({spot,spotrating}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const [showPrice, setShowPrice] = useState(false)

  useEffect(()=>{

  },[dispatch])

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
          <BookingForm spot={spot}/>
      </div>


    </div>



  )

}

export default ReservationCart
