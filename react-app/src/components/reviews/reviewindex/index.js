import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { loadReviewsThunk } from '../../../store/reviews';
import ReviewCard from '../reviewcard'
import '../index.css'




const ReviewIndex = ({spot, spotrating}) =>{
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.spots.currentSpot.spot.reviews)
  useEffect(()=>{
    dispatch(loadReviewsThunk())
  },[dispatch])


  if(!reviews ) return <h1>Loading...</h1>
  const reviewList = Object.values(reviews)
  return(
    <div className='reviews-wrapper'>
      <div className='review-meta-data'>
      <span>★ {spotrating}</span>
      <span> · </span>
      <span>{spot.reviews.length} reviews</span>
      </div>
      <ul className='review-list'>
        {reviewList?.length > 0 && reviewList.map(review =>
          <ReviewCard review={review}/>
          )}
      </ul>
    </div>
  )

}

export default ReviewIndex
