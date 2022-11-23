import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpotThunk, updateSpotThunk } from '../../../store/spots';





const SpotCard = ({spot}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const spots = useSelector(state => state.spots.allSpots)

  useEffect(()=>{

  },[spots, dispatch])
  
  const getSpot =async ()=>{
    await dispatch(getSpotThunk(spot.id))
    history.push(`/spots/${spot.id}`)
  }
  if(!spot) return <h1>Loading...</h1>

  return(
    <div>
    <div className='single-spot-wrapper'>
      <p>
        {spot.name} {spot.city} {spot.state} {spot.price}
        </p>
    </div>
    <button
    onClick={() => getSpot()}
    >Load Spot</button>
    </div>
  )

}

export default SpotCard
