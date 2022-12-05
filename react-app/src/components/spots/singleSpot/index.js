import {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useParams} from "react-router-dom";
import { getSpotThunk } from '../../../store/spots';
import NotFound from '../../auth/notfound';
import ReviewIndex from '../../reviews/reviewindex';
import './index.css'
import ReservationCart from './spotReservationCart';



const SingleSpot = () =>{
  const dispatch = useDispatch()
  const spot = useSelector(state => state.spots.currentSpot.spot)
  const {spotId} = useParams()
  const spots = useSelector(state => state.spots.allSpots[spotId])

  useEffect(()=>{
  dispatch(getSpotThunk(spotId))
  },[spots, dispatch, spotId])

  if(!spot ) return <NotFound />

  let spotRating;
  let ratingArr = spot.avg_rating.toString().split('');
  let miniImages = spot.images.slice(1)
  while(miniImages.length <3){
    miniImages.push({url: 'https://res.cloudinary.com/degkakjou/image/upload/v1669254001/AirBnB/xn8sI0i_rvsdw7.jpg'})
  }
   if(spot.avg_rating === 0) spotRating = null;
   else if(Number.isInteger(spot.avg_rating)) spotRating = `${spot.avg_rating}.0`;
   else if(ratingArr.slice(2).length === 1) spotRating = spot.avg_rating;
   else spotRating = parseFloat(spot.avg_rating).toFixed(1);

  return(
    <div className='spot-page-wrapper'>


    <div className='spot-page-container'>
        <div className='single-spot-header'>
          <h1 className='single-spot-title'>{spot.name}</h1>
          <div className='single-spot-infobar'>
            <span>{spotRating === null? `★ No Current Reviews`: `★${spotRating}`}</span>
            <span> · </span>
            <span>{spot.reviews.length} reviews</span>
            <span> · </span>
            {spot.avg_rating >= 4 &&
            <span><i class="fa-solid fa-medal"></i> Superhost  · </span>

            }
            <span>{spot.city}, {spot.state}, {spot.country}</span>
          </div>
        </div>
        <div className='single-spot-images-wrapper'>
          <div className='single-spot-main-image'>
            <img alt='' src={spot.images[0].url}></img>
          </div>
          <div className='single-spot-mini-image-wrapper'>
            {miniImages.map(image =>
              <img alt='' src={image.url}></img>
              )}
          </div>
        </div>
        <div className='single-spot-bottom-wrapper'>
          <div className='single-spot-bottom-left'>
            <div className='single-spot-host-info'>
              <h2
                className='single-spot-title'>{`Hosted by ${spot.owner.firstName}`}
              </h2>
              <div className='host-profile-pic'>
                <img alt=''src='https://res.cloudinary.com/degkakjou/image/upload/v1669764105/AirBnB/whiteclipart2562521_iu2nva.png'></img>
              </div>
            </div>
            <div className='spot-awards'>
              {spot.avg_rating >=4 &&
              <div className='spot-award-item'>
                <div className='award-badge'><i class="fa-solid fa-medal"></i></div>
                <div className='award-info'>
                <h3>{spot.owner.firstName} is a Superhost</h3>
                <div className='award-description'>
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                </div>
                </div>
              </div>
              }
              <div className='spot-award-item'>
                <div className='award-badge'><i class="fa-solid fa-key"></i></div>
                <div className='award-info'>
                <h3>Great check-in experience</h3>
                <div className='award-description'>
                100% of recent guests gave the check-in process a 5-star rating.
                </div>
                </div>
              </div>
              <div className='spot-award-item'>
                <div className='award-badge'><i class="fa-solid fa-calendar-days"></i></div>
                <div className='award-info'>
                <h3>Free cancellation for 48 hours.</h3>
                </div>
              </div>
            </div>
          <div className='spot-protection'>
            <img alt='' src='https://res.cloudinary.com/degkakjou/image/upload/v1669762502/AirBnB/54e427bb-9cb7-4a81-94cf-78f19156faad_vuy5mu.png'></img>
            <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
          </div>
          </div>
          <div className='single-spot-bottom-right'>
            <ReservationCart spot={spot} spotrating={spotRating}/>
          </div>
        </div>
          <ReviewIndex spot={spot} spotrating={spotRating} />
    </div>
    </div>
  )

}

export default SingleSpot
