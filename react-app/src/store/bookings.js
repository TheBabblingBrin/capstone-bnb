

//CONSTANTS
const LOAD_BOOKINGS = 'Bookings/LOAD_BOOKINGS'
const GET_BOOKING = 'Bookings/GET_BOOKING'
const ADD_BOOKING = 'Bookings/ADD_BOOKING'
const REMOVE_BOOKING = 'Bookings/REMOVE_BOOKING'

//ACTIONS
const loadBookings = (bookings) =>({
  type: LOAD_BOOKINGS,
  bookings
});

const getBooking =(booking) =>({
  type: GET_BOOKING,
  booking

})

const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking
})

const removeBooking = (booking) => ({
  type: REMOVE_BOOKING,
  booking
})



//THUNKS
export const loadBookingsThunk = ()=> async (dispatch) => {
  const response  = await fetch('/api/bookings')

  if(response.ok){
    const data = await response.json();
    dispatch(loadBookings(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const getBookingThunk = (bookingId) => async (dispatch) => {
  console.log('GETTING BOOKING', bookingId)
  const response = await fetch(`/api/bookings/${bookingId}`)

  if(response.ok){
    const data = await response.json();
    console.log('GOT IT BOSS', data)
    dispatch(getBooking(data.booking))
    return data.booking;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const addBookingThunk = (booking) => async (dispatch) =>{
  console.log('BOOKING THUNK', booking)
  const response = await fetch('/api/bookings',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  })
  if(response.ok){
    const data = await response.json();
    await dispatch(addBooking(data.booking))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const updateBookingThunk = (booking, id) => async (dispatch) =>{

  const response = await fetch(`/api/bookings/${id}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  })


  if(response.ok){
    const data = await response.json();
    dispatch(addBooking(data.booking))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data) {

      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const removeBookingThunk = (bookingId) => async (dispatch) =>{
  const response = await fetch(`/api/bookings/${bookingId}`,{
    method: "DELETE"
  })

  if(response.ok){
    await dispatch(removeBooking(bookingId))
    return;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


//REDUCER
const initialState = {allBookings:{}, currentBooking:{}}
export default function BookingReducer(state = initialState, action){
  switch (action.type){
    case LOAD_BOOKINGS:
      const allBookings = normalizeArray(action.bookings.bookings);
      return {...state, allBookings:{...allBookings}}
    case GET_BOOKING:
      const currentBooking = {allBookings: {...state.allBookings}, currentBooking:{...action.booking}}
      return currentBooking
    case ADD_BOOKING:
        if (!state[action.booking.id]) {
          const newState = {
            ...state, allBookings:{...state.allBookings,
            [action.booking.id]: action.booking}
          };
          return newState;
        }
        return {
          ...state, allBookings:{...state.allBookings,
          [action.booking.id]: {
            ...state[action.booking.id],
            ...action.booking}
          }
        };
    case REMOVE_BOOKING:
      const deleteState = { ...state };
      delete deleteState.allBookings[action.bookingId];
      return deleteState;
    default:
      return state;
  }

}
//HELPERS
function normalizeArray(dataArray){
  if (!dataArray instanceof Array) throw new Error('Normalize problem: data invalid')
  const obj = {}
  dataArray.forEach(element => {
    obj[element.id] = element
  })
  return obj
}
