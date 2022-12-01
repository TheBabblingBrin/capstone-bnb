import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBookingThunk, loadBookingsThunk, removeBookingThunk } from '../../../store/bookings';
import BookingForm from '../bookingform';
import './index.css'
const formatDate = (date) => {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() +1 ) ,
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}



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
  // if(showForm) return     <BookingForm update={true} booking={booking} spot={booking.spot}/>

  return(
    <div>
    <div className='single-booking-wrapper'>
        <div className='review-listing-pic'>
            <img src={booking.spot?.images[0].url} onClick={()=>history.push(`/spots/${booking.spot.id}`)}></img>
        </div>
      <div className='booking-info'>
        <h4>{booking.spot.name}</h4>
        <h6>{booking.spot.city}, {booking.spot.state}</h6>
        <span>{formatDate(booking.start_date)} to {formatDate(booking.end_date)}</span>
      </div>
    {showForm &&
      <BookingForm update={true} booking={booking} spot={booking.spot} setShowForm={setShowForm} />}
    {!showForm &&
      <div className='booking-index-button-container'>
      <div>
      <button
      onClick={() => getBooking()}
      >Update</button>
      </div>
      <div>
      <button
      onClick={()=> deleteBooking()}
      >Delete</button>
      </div>
    </div>}
    </div>
    </div>
  )

}

export default BookingCard
