import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBookingThunk, loadBookingsThunk, removeBookingThunk } from '../../../store/bookings';
import BookingForm from '../bookingform';





const BookingCard = ({booking}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const bookings = useSelector(state => state.bookings.allBookings)
  const [showForm, setShowForm] = useState(false)
  useEffect(()=>{

  },[bookings, dispatch])

  const getBooking =async ()=>{
    await dispatch(getBookingThunk(booking.id))
    setShowForm(!showForm)
  }
  const deleteBooking = async () =>{
    await dispatch(removeBookingThunk(booking.id))
    dispatch(loadBookingsThunk())
  }
  if(!booking) return <h1>Loading...</h1>

  return(
    <div>
    <div className='single-booking-wrapper'>
      <p>
        {booking.id} {booking.start_date} {booking.end_date}
        </p>
    </div>
    <button
    onClick={() => getBooking()}
    >Update Booking</button>
    <button
    onClick={()=> deleteBooking()}
    >Delete Booking</button>
    {showForm &&
    <BookingForm update={true} booking={booking}/>}
    </div>
  )

}

export default BookingCard
