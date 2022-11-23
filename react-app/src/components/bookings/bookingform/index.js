import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ErrorDisplay from '../../auth/ErrorDisplay'
import {loadBookingsThunk, updateBookingThunk, addBookingThunk} from '../../../store/bookings'
const formatDate = (date) => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() +1) ,
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}
const BookingForm = ({update = false, booking, spotId}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currbooking = useSelector(state => state.bookings[booking?.id])
  const user = useSelector(state => state.session.user)
  const [spot, setSpot] = useState(update? booking.spotId:spotId)
  const [startDate, setStartDate] = useState(update? formatDate(booking?.start_date):'')
  const [endDate, setEndDate] = useState(update? formatDate(booking?.end_date):'')
  const [errors, setErrors] = useState([]);

  const updateStartDate = (e) => setStartDate(e.target.value);
  const updateEndDate = (e) => setEndDate(e.target.value);

  useEffect(()=>{
    dispatch(loadBookingsThunk())


  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      spotId:spot,
      start_date: startDate,
      end_date: endDate

    };
    let newbooking = !update? await dispatch(addBookingThunk(payload)): await dispatch(updateBookingThunk(payload,booking?.id))
    if(newbooking.errors){
      setErrors(newbooking.errors)
      return
    }
    if(newbooking){
      console.log('NEWSTUFF',newbooking)
      // dispatch(loadBookingsThunk())
      // history.push(`/bookings/${newbooking.booking.id}`)
    }
  }


  return(
    <form className='booking-form' onSubmit={handleSubmit}>
      <div>
          <ErrorDisplay id={'booking-error-list'} errors={errors}/>
        </div>
        <label>
            CHECK-IN
        <input
          type="date"
          required
          value={startDate}
          onChange={updateStartDate}
        />
        </label>
        <label>
          CHECK-OUT
       <input
          type="date"
          required
          value={endDate}
          onChange={updateEndDate}
        />
        </label>
      <button className='create-booking-submit' type='submit'>{update? 'Update':'Reserve'}</button>

    </form>
  )
}

export default BookingForm
