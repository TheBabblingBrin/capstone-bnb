import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { loadSpotsThunk } from '../../../store/spots';
import SpotCard from './spotcard'




const SpotIndex = () =>{
  const dispatch = useDispatch()
  const spots = useSelector(state => state.spots.allSpots)
  useEffect(()=>{
    dispatch(loadSpotsThunk())
  },[dispatch])


  if(!spots ) return <h1>Loading...</h1>
  const spotList = Object.values(spots)
  return(
    <div className='spots-wrapper'>
      <ul>
        {spotList?.length > 0 && spotList.map(spot =>
          <SpotCard spot={spot}/>
          )}
      </ul>
    </div>
  )

}

export default SpotIndex
