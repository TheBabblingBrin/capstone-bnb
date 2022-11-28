import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ErrorDisplay from '../../auth/ErrorDisplay'
import {loadReviewsThunk, updateReviewThunk, addReviewThunk} from '../../../store/reviews'
import { loadSpotsThunk } from '../../../store/spots';

const ReviewForm = ({update = false, review, spotId, setShowForm}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  // const currReview = useSelector(state => state.reviews[review?.id])
  const user = useSelector(state => state.session.user)
  const [spot, setSpot] = useState(update? review.spotId:spotId)
  const [body, setBody] = useState(update? review?.body:'')
  const [rating, setRating] = useState(update? review?.rating:'')
  const [errors, setErrors] = useState([]);

  const updateBody = (e) => setBody(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

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
      dispatch(loadSpotsThunk())
      if(setShowForm){
        setShowForm(false)
      }
      // history.push(`/Reviews/${newReview.Review.id}`)
    }
  }


  return(
    <form className='review-form' onSubmit={handleSubmit}>
      <div>
          <ErrorDisplay id={'review-error-list'} errors={errors}/>
        </div>
        <label>
            <textarea
            type='text'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter your experience here.'
            className='review-textarea'
            />
            <div className='word-counter'>{255 - body.length > 0 ? 255 - body.length : 0} characters remaining</div>
         </label>
        <div className="star-radio-buttons">

<label>
   Select a Rating
   <label>
   <input
      type="radio"
      value="1"
      name="Rating"
      onChange={(e) => setRating(parseInt(e.target.value))}
      checked={rating === 1 ? true: false}
   />
   ★
   </label>

   <label>
   <input
      type="radio"
      value="2"
      name="Rating"
      onChange={(e) => setRating(parseInt(e.target.value))}
      checked={rating === 2 ? true: false}
   />
   ★★
   </label>

   <label>
   <input
      type="radio"
      value="3"
      name="Rating"
      onChange={(e) => setRating(parseInt(e.target.value))}
      checked={rating === 3 ? true: false}
   />
   ★★★
   </label>

   <label>
   <input
      type="radio"
      value="4"
      name="Rating"
      onChange={(e) => setRating(parseInt(e.target.value))}
      checked={rating === 4 ? true: false}
   />
   ★★★★
   </label>

   <label>
   <input
      type="radio"
      value="5"
      name="Rating"
      onChange={(e) => setRating(parseInt(e.target.value))}
      checked={rating === 5 ? true: false}
   />
   ★★★★★
   </label>
</label>
</div>
      <button className='create-Review-submit' type='submit'>{update? 'Update Review':'Post Review'}</button>

    </form>
  )
}

export default ReviewForm
