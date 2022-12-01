import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import ErrorDisplay from '../../auth/ErrorDisplay'
import {loadReviewsThunk, updateReviewThunk, addReviewThunk} from '../../../store/reviews'
import { getSpotThunk, loadSpotsThunk } from '../../../store/spots';
import StarHovering from './stars';


const ReviewForm = ({update = false, review, spotId, setShowModal, setShowForm}) => {
  const dispatch = useDispatch()

  const [body, setBody] = useState(update? review?.body:'')
  const [rating, setRating] = useState(update? review?.rating:'')
  const [errors, setErrors] = useState([]);
  let spot = update? review?.spotId:spotId

  useEffect(()=>{
    dispatch(loadReviewsThunk())

  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      spotId:spot,
      body: body,
      rating: rating

    };
    let newReview = !update? await dispatch(addReviewThunk(payload)): await dispatch(updateReviewThunk(payload,review?.id))
    if(newReview.errors){
      setErrors(newReview.errors)
      return
    }
    if(newReview){
      dispatch(getSpotThunk(spotId))
      dispatch(loadSpotsThunk())

      if(setShowModal){
        setShowModal(false)
      }
      if(setShowForm){
        setShowForm(false)
      }
    }
  }


  return(
    <form className='review-form' onSubmit={handleSubmit}>
      <div>
          <ErrorDisplay id={'review-error-list'} errors={errors}/>
        </div>
        <div className='review-textarea-container'>
            <textarea
            type='text'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter your experiences here.'
            className='review-textarea'
            />
            <div className='word-counter'>{500 - body?.length > 0 ? 500 - body?.length : 0}/500</div>
         </div>

        <StarHovering stars={rating} setRating={setRating}/>


      <button className='review-modal-button' type='submit'>{update? 'Update Review':'Post Review'}</button>

    </form>
  )
}

export default ReviewForm
