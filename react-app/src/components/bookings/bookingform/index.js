import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ErrorDisplay from '../../auth/ErrorDisplay'
import {loadBookingsThunk, updateBookingThunk, addBookingThunk} from '../../../store/bookings'
import './index.css'
import LoginFormModal from '../../auth/User/LoginFormModal';
const formatDate = (date) => {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() +1) ,
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [year, month, day].join('-');
}
const BookingForm = ({update = false, booking, spot,setShowForm}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currbooking = useSelector(state => state.bookings[booking?.id])
  const user = useSelector(state => state.session.user)
  const [startDate, setStartDate] = useState(update? formatDate(booking?.start_date):null)
  const [endDate, setEndDate] = useState(update? formatDate(booking?.end_date):null)
  const [errors, setErrors] = useState([]);
  const [showPrice, setShowPrice] = useState(false);
  const [nights, setNights] = useState()


  const updateStartDate = (e) => {
    setStartDate(e.target.value)

  };
  const updateEndDate = (e) => {
    setEndDate(e.target.value)

  };
  useEffect(()=>{
    dispatch(loadBookingsThunk())
    setNights((new Date(endDate)-new Date(startDate))/ (1000 * 3600 * 24))
  }, [dispatch, startDate,endDate])

  const checkDates = () => {
    const dateErrors = []
    if(!startDate){
      dateErrors.push('Please input a check-in date.')
    }
    if(!endDate){
      dateErrors.push('Please input a check-out date.')
    }
    setErrors(dateErrors)
    return dateErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  setErrors([])

     const dateErrors =  await checkDates()
     if(dateErrors.length > 0)return

    let payload = {
      spotId:spot.id,
      start_date: startDate,
      end_date: endDate

    };
    let newbooking = !update? await dispatch(addBookingThunk(payload)): await dispatch(updateBookingThunk(payload,booking?.id))
    if(newbooking.errors){

      setErrors(newbooking.errors)
      return
    }
    if(newbooking){
      alert('Enjoy your vacation!')
      if(setShowForm){
        setShowForm(false)
      }
      // dispatch(loadBookingsThunk())
      // history.push(`/bookings/${newbooking.booking.id}`)
    }
  }


  return(
    <div className={update? 'booking-form-wrapper manage': 'booking-form-wrapper'}>
    <form className={update? 'booking-form manage': 'booking-form'} onSubmit={handleSubmit}>
      <div className='signup-error-list'>
          <ErrorDisplay id={'booking-error-list'} errors={errors}/>
        </div>
        <div className="dates_container">
                <div className="date_input_containers">
                  <label>
                      CHECK-IN
                  <input
                    type="date"
                    value={startDate}
                    onChange={updateStartDate}
                  />
                  </label>
                </div>
                <div className="date_input_containers">
                  <label>
                    CHECK-OUT
                  <input
                    type="date"
                    value={endDate}
                    onChange={updateEndDate}
                  />
                  </label>
                </div>
        </div>

      <div className='booking-button-wrapper'>
        {user &&
        <button className='create-booking-submit' type='submit'>{update? 'Update':'Reserve'}</button>
        }
        {!user &&
         <LoginFormModal location={'Reserve'}/>
        }

      </div>

    </form>
    {endDate && startDate &&

    <div className='cart-bottom'>
      {!update &&
        <div className='cart-calc'>
          <div>
            <span>${spot.price}x{nights}</span>
            <span>${spot.price * nights}</span>
          </div>
          <div>
            <span>Cleaning fee</span>
            <span>${parseInt(spot.price/nights)}</span>
          </div>
          <div>
            <span>Service fee</span>
            <span>${parseInt((spot.price * nights)*.14)}</span>
          </div>
        </div>
      }
        <div className='cart-total'>
          <span>Total before taxes</span>
          <span>${parseInt((spot.price * nights)*.14) + spot.price * nights + parseInt(spot.price/nights)}</span>
        </div>
      </div>
    }
    </div>
  )
}

export default BookingForm
