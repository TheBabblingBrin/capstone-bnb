import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {  useParams, useHistory} from "react-router-dom";
import { getSpotThunk, loadSpotsThunk, removeSpotThunk } from '../../../store/spots';
import BookingForm from '../../bookings/bookingform';
import SpotForm from '../spotform';
import SpotCard from '../spotsindex/spotcard';




const SingleSpot = () =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const spot = useSelector(state => state.spots.currentSpot.spot)
  const {spotId} = useParams()
  const spots = useSelector(state => state.spots.allSpots[spotId])

  useEffect(()=>{
  dispatch(getSpotThunk(spotId))
  },[spots])

  const deleteSpot = async () =>{
    let confirm = dispatch(removeSpotThunk(spot.id))
    if(confirm){
      history.push('/')
    }
  }

  if(!spot ) return <h1>Loading...</h1>

  return(
    <div className='spot-page container'>
          <SpotCard spot={spot}/>
          <button
          className='spot-button'
          onClick={()=> deleteSpot()}
          >
            Delete
          </button>
          <h3>Update Spot</h3>
          <SpotForm update={true}/>
          <h3>Reserve Spot</h3>
          <BookingForm spotId={spotId}/>
    </div>
  )

}

export default SingleSpot
