import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviewThunk, loadReviewsThunk, removeReviewThunk, updateReviewThunk } from '../../../store/reviews';
import { loadSpotsThunk } from '../../../store/spots';
import ReviewForm from '../reviewform';
import '.././index.css'




const ReviewCard = ({review}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const reviews = useSelector(state => state.spots.currentSpot.spot.reviews)
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{

  },[reviews, dispatch])

  const deleteReview =async (id)=>{
    dispatch(removeReviewThunk(id))
    dispatch(loadSpotsThunk())
  }
  if(!review) return <h1>Loading...</h1>

  return(
    <div>
    <div className='single-review-wrapper'>
      <div className='review-meta'>
        <div className='review-profile-pic'>
          <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669764105/AirBnB/whiteclipart2562521_iu2nva.png'></img>
        </div>
        <div className='reviewer-info'>
          <h4>{review.reviewer.firstName}</h4>
          <span>{review.updatedAt.split(' ')[0].slice(1)}</span>
        </div>
      </div>
        <p>
          {review.body}
        </p>

    </div>
    </div>


  )

}

export default ReviewCard
