

//CONSTANTS
const LOAD_REVIEWS = 'Reviews/LOAD_REVIEWS'
const GET_REVIEW = 'Reviews/GET_REVIEW'
const ADD_REVIEW = 'Reviews/ADD_REVIEW'
const REMOVE_REVIEW = 'Reviews/REMOVE_REVIEW'


//ACTIONS
const loadReviews = (reviews) =>({
  type: LOAD_REVIEWS,
  reviews
});

const getReview =(review) =>({
  type: GET_REVIEW,
  review

})

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review
})



//THUNKS
export const loadReviewsThunk = ()=> async (dispatch) => {
  const response  = await fetch('/api/reviews')

  if(response.ok){
    const data = await response.json();
    dispatch(loadReviews(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const getReviewThunk = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`)

  if(response.ok){
    const data = await response.json();
    dispatch(getReview(data))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const addReviewThunk = (review) => async (dispatch) =>{
  const response = await fetch('/api/reviews',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  })

  if(response.ok){
    const data = await response.json();
    await dispatch(addReview(data))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const updateReviewThunk = (review, id) => async (dispatch) =>{

  const response = await fetch(`/api/reviews/${id}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  })


  if(response.ok){
    const data = await response.json();
    dispatch(addReview(data.review))
    console.log(data, '+++++++++++++++++++++++++++')
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data) {

      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const removeReviewThunk = (reviewId) => async (dispatch) =>{
  const response = await fetch(`/api/reviews/${reviewId}`,{
    method: "DELETE"
  })

  if(response.ok){
    const data = await response.json();
    dispatch(removeReview(reviewId))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


//REDUCER
const initialState = {allReviews:{}, currentReview:{}}
export default function ReviewReducer(state = initialState, action){
  switch (action.type){
    case LOAD_REVIEWS:
      const allReviews = normalizeArray(action.reviews.reviews);
      return {...state, allReviews:{...allReviews}}
    case GET_REVIEW:
      const currentReview = {allReviews: {...state.allReviews}, currentReview:{...action.review}}
      return currentReview
    case ADD_REVIEW:
        if (!state[action.review.id]) {
          const newState = {
            ...state, allReviews:{...state.allReviews,
            [action.review.id]: action.review}
          };
          return newState;
        }
        return {
          ...state, allReviews:{...state.allReviews,
          [action.review.id]: {
            ...state[action.review.id],
            ...action.review}
          }
        };
    case REMOVE_REVIEW:
      const deleteState = { ...state };
      delete deleteState.allReviews[action.reviewId];
      return deleteState;
    default:
      return state;
  }

}
//HELPERS
function normalizeArray(dataArray){
  if (!dataArray instanceof Array) throw new Error('Normalize problem: data invalid')
  const obj = {}
  dataArray.forEach(element => {
    obj[element.id] = element
  })
  return obj
}
