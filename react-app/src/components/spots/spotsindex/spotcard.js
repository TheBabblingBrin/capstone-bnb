import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpotThunk, updateSpotThunk } from '../../../store/spots';





const SpotCard = ({spot}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  // const spot = useSelector(state => Object.values(state.spots.allSpots))

  useEffect(()=>{
  },[])
  const getSpot =async ()=>{
    await getSpotThunk(spot.id)
    history.push(`/spots/${spot.id}`)
  }
  const spotInfo = Object.values(spot)
  if(!spot) return <h1>Loading...</h1>

  return(
    <div>
    <div className='single-spot-wrapper'>
      <ul>
        {spotInfo.map(prop => <li>{prop}</li>)}
      </ul>
    </div>
    <button
    onClick={() => getSpot()}
    >Load Spot</button>
    </div>
  )

}

export default SpotCard
