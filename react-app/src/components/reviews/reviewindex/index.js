import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { loadReviewsThunk } from '../../../store/reviews';

import ReviewCard from '../reviewcard'
import '../index.css'
import ReviewFormModal from '../reviewmodal';
import { getSpotThunk } from '../../../store/spots';




const ReviewIndex = ({spot, spotrating}) =>{
  const dispatch = useDispatch()
  const reviews = useSelector(state => state.spots.currentSpot.spot.reviews)
  const user = useSelector(state => state.session.user)
  const [leftReview, setLeftReview] = useState(false)
  useEffect(()=>{
    dispatch(loadReviewsThunk())
  },[dispatch])

  useEffect(()=>{
    if(!user){
      setLeftReview(true)
      return
    }
    for(let rev of Object.values(reviews)){
      if(rev.reviewer.id == user.id){
        setLeftReview(true)
      }
    }
  }, [dispatch, reviews])


  if(!reviews ) return <h1>Loading...</h1>
  const reviewList = Object.values(reviews)
  return(
    <div className='reviews-wrapper'>
      {user && user.id !== spot.owner.id && !leftReview &&
        <>
        <h5>Let others know about your stay!</h5>
        <ReviewFormModal spotId={spot.id}/>
        </>
      }
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
