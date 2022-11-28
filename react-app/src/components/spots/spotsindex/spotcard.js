import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpotThunk, loadSpotsThunk, updateSpotThunk } from '../../../store/spots';
import '.././index.css'




const SpotCard = ({spot}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const spots = useSelector(state => state.spots.allSpots)

  const deleteImage =async (id) => {
    console.log(`deleting`, id)
    fetch(`/api/images/${id}`,{
      method: 'DELETE'
    })
    dispatch(loadSpotsThunk())
  }
  useEffect(()=>{

  },[spots, dispatch])

  const getSpot =async ()=>{
    history.push(`/spots/${spot.id}`)
  }
  if(!spot) return <h1>Loading...</h1>

  return(
    <div>
    <div className='single-spot-wrapper'>
      <p>
        {spot.name} {spot.city} {spot.state} {spot.price} {spot.avg_rating}
        </p>
        {spot.images?.length > 0 && spot.images.map(image =>
        <div className='spot-card-image-container'>

            <img className='spot-card-image' src={image.url }/>
            <button onClick={()=> deleteImage(image.id)}>Remove Image</button>
        </div>
            )}

    </div>
    <button
    onClick={() => getSpot()}
    >Load Spot</button>
    </div>
  )

}

export default SpotCard
