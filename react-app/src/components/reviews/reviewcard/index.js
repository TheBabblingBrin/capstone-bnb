import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getReviewThunk, loadReviewsThunk, removeReviewThunk, updateReviewThunk } from '../../../store/reviews';
import { loadSpotsThunk } from '../../../store/spots';
import ReviewForm from '../reviewform';
import '.././index.css'




const ReviewCard = ({review, manage=false}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const reviews = useSelector(state => state.spots.currentSpot.spot?.reviews)
  const userReviews = useSelector(state=> state.reviews.allReviews)
  const [showForm, setShowForm] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  useEffect(()=>{
  },[dispatch, userReviews])

  const deleteReview =async (id)=>{
    let success = await dispatch(removeReviewThunk(id))
    if(success){
      dispatch(loadReviewsThunk())
      dispatch(loadSpotsThunk())

    }
  }
  if(!review) return <h1>Loading...</h1>

  return(
    <div>
    <div className={!manage?'single-review-wrapper':'single-review-wrapper management'}>
      <div className='review-meta'>
      {!manage &&
        <div className='review-profile-pic'>
          <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669764105/AirBnB/whiteclipart2562521_iu2nva.png'></img>
        </div>}
        {manage &&
          <div className='review-listing-pic'>
            <img src={review.spot?.images[0].url}></img>
           </div>}
      {!manage &&
        <div className='reviewer-info'>
          <h4>{review.reviewer.firstName}</h4>
          <span>{review.updatedAt.split(' ')[0].slice(1)}</span>
          </div>}
        {manage &&
          <div className='reviewer-info management'>
            <div>
            <h4>{review.spot?.name}</h4>
            <h6>{review.spot?.city}, {review.spot?.state}</h6>
            <div className='review-buttons'>
              <button
              className='edit-review'
              onClick={() => setShowForm(!showForm)}
              ><i className="fa-solid fa-pen-to-square"></i></button>
              <button
              className='delete-review'
              onClick={()=> deleteReview(review.id)}
              ><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
            <span>Reviewed on {review.updatedAt.split(' ')[0].slice(1)}</span>
          </div>
        }
      </div>
      {showForm &&
        <ReviewForm review={review} update={true} setShowForm={setShowForm}/>
      }
      {!showForm &&
        <p>
          {review.body}
        </p>
      }

    </div>
    </div>


  )

}

export default ReviewCard
