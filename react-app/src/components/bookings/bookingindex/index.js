import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { loadBookingsThunk } from '../../../store/bookings';
import BookingCard from '../bookingcard';





const BookingIndex = () =>{
  const dispatch = useDispatch()
  const bookings = useSelector(state => state.bookings.allBookings)
  const bookingList = Object.values(bookings)
  useEffect(()=>{
    dispatch(loadBookingsThunk())
  },[dispatch,])


  if(!bookings ) return <h1>Loading...</h1>
  return(
    <div className='bookings-wrapper'>
      <ul>
        {bookingList?.length > 0 && bookingList.map(booking =>
          <BookingCard booking={booking}/>
          )}
      </ul>
    </div>
  )

}

export default BookingIndex
