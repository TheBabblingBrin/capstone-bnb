

//CONSTANTS
const LOAD_SPOTS = 'spots/LOAD_SPOTS'
const GET_SPOT = 'spots/GET_SPOT'
const ADD_SPOT = 'spots/ADD_SPOT'
const REMOVE_SPOT = 'spots/REMOVE_SPOT'


//ACTIONS
const loadSpots = (spots) =>({
  type: LOAD_SPOTS,
  spots
});

const getSpot =(spot) =>({
  type: GET_SPOT,
  spot

})

const addSpot = (spot) => ({
  type: ADD_SPOT,
  spot
})

const removeSpot = (spot) => ({
  type: REMOVE_SPOT,
  spot
})



//THUNKS
export const loadSpotsThunk = ()=> async (dispatch) => {
  const response  = await fetch('/api/spots')

  if(response.ok){
    const data = await response.json();
    dispatch(loadSpots(data))
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

export const getSpotThunk = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`)

  if(response.ok){
    const data = await response.json();
    dispatch(getSpot(data))
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

export const addSpotThunk = (spot) => async (dispatch) =>{
  const response = await fetch('/api/spots',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  })
  if(response.ok){
    const data = await response.json();
    if (data.errors) {
      return data;
    }
    await dispatch(addSpot(data))
    return data;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data) {
      console.log('NOTNOTOKOKOKOKOKOKOK', data)

      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const updateSpotThunk = (spot, id) => async (dispatch) =>{

  const response = await fetch(`/api/spots/${id}`,{
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  })

  console.log('RES', response)

  if(response.ok){
    const data = await response.json();
    dispatch(addSpot(data.spot))
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

export const removeSpotThunk = (spotId) => async (dispatch) =>{
  const response = await fetch(`/api/spots/${spotId}`,{
    method: "DELETE"
  })

  if(response.ok){
    const data = await response.json();
    dispatch(removeSpot(spotId))
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
const initialState = {allSpots:{}, currentSpot:{}}
export default function spotReducer(state = initialState, action){
  switch (action.type){
    case LOAD_SPOTS:
      const allspots = normalizeArray(action.spots.spots);
      return {...state, allSpots:{...allspots}}
    case GET_SPOT:
      const currentspot = {allSpots: {...state.allSpots}, currentSpot:{...action.spot}}
      return currentspot
    case ADD_SPOT:
        if (!state[action.spot.id]) {
          const newState = {
            ...state, allSpots:{...state.allSpots,
            [action.spot.id]: action.spot}
          };
          return newState;
        }
        return {
          ...state, allspots:{...state.allSpots,
          [action.spot.id]: {
            ...state[action.spot.id],
            ...action.spot}
          }
        };
    case REMOVE_SPOT:
      const deleteState = { ...state };
      delete deleteState.allSpots[action.spotId];
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
