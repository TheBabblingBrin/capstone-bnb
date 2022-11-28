import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviewThunk, loadReviewsThunk, removeReviewThunk, updateReviewThunk } from '../../../store/reviews';
import { loadSpotsThunk } from '../../../store/spots';
import ReviewForm from '../reviewform';
// import '.././index.css'




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
      {!showForm &&
      <>
      <p>
        {review.id}
        </p>
        <p>
          {review.body}
          </p>
      <button
      onClick={() => deleteReview(review.id)}
      >Delete Review</button>
      <button
      onClick={() => setShowForm(!showForm)}
      >Update Review</button>
      </>}
    {showForm &&
      <ReviewForm update={true} review={review} setShowForm={setShowForm}/>}
    </div>
    </div>


  )

}

export default ReviewCard
