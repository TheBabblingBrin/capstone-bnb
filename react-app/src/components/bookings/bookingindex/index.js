import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadBookingsThunk } from '../../../store/bookings';
import BookingCard from '../bookingcard';





const BookingIndex = () =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const bookings = useSelector(state => state.bookings.allBookings)
  const bookingList = Object.values(bookings)
  useEffect(()=>{
    console.log('inside booking')
    dispatch(loadBookingsThunk())
  },[dispatch,])

  const goHome = () => {
    history.push('/')
  }

  if(!bookings ) return <h1>Loading...</h1>
  if(bookingList.length === 0) return <button className={'bookings-button'} onClick={()=> goHome()}>Book your first trip today!</button>
  return(
    <div className='bookings-wrapper'>
      <ul className='booking-list'>
        {bookingList?.length > 0 && bookingList.map(booking =>
          <BookingCard booking={booking}/>
          )}
      </ul>
    </div>
  )

}

export default BookingIndex
