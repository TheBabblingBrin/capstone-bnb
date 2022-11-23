import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {  useParams, useHistory} from "react-router-dom";
import { getSpotThunk, loadSpotsThunk, removeSpotThunk } from '../../../store/spots';
import SpotForm from '../spotform';
import SpotCard from '../spotsindex/spotcard';




const SingleSpot = () =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const spot = useSelector(state => state.spots.currentSpot.spot)
  const {spotId} = useParams()

  useEffect(()=>{
  dispatch(getSpotThunk(spotId))
  },[])

  const deleteSpot = async () =>{
    let confirm = await dispatch(removeSpotThunk(spot.id))
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
          <SpotForm update={true}/>

    </div>
  )

}

export default SingleSpot
