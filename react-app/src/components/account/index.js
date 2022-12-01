
import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './index.css';
import { loadReviewsThunk } from '../../store/reviews';
import ReviewCard from '../reviews/reviewcard';
import { loadSpotsThunk } from '../../store/spots';
import SpotCard from '../spots/spotsindex/spotcard';
import SpotFormModal from '../spots/spotform';

function AccountPage (){
   const dispatch = useDispatch();
   const user = useSelector(state => state.session.user)
   const userReviews = useSelector(state => state.reviews.allReviews)
   const spots = useSelector(state => state.spots.allSpots)
   let reviewList
   let spotsList

   useEffect(() => {
    dispatch(loadReviewsThunk())
    dispatch(loadSpotsThunk())
   }, [])

   useEffect(() =>{

   }, [userReviews])

   if(userReviews){
    reviewList = Object.values(userReviews)
   }
   if(spots){
    spotsList = Object.values(spots).filter((spot, idx) => spot.owner?.id == user.id)
    console.log(spotsList)
   }
   return (
    <div className='account-page-wrapper'>
      <div className='account-page-container'>
      <div className='user-meta-data'>
        <div className='user-account-info'>
          <h1>Hi, {user.firstName}</h1>
          <span>Email: {user.email}</span>
        </div>
        <div className='account-profile-image'>
          <img src='https://res.cloudinary.com/degkakjou/image/upload/v1669764105/AirBnB/whiteclipart2562521_iu2nva.png'></img>
        </div>
      </div>
      <div className='account-items-wrapper'>
        <div className='account-item-container account-spots'>
          <h3>Manage your listings</h3>
          <div className='account-spots-list'>
          <SpotFormModal />
          {spotsList?.length > 0 && spotsList.map(spot =>
            <SpotCard spot={spot} manage={true}/>)}
          </div>
        </div>
        <div className='account-item-container account-reviews'>
          <h3>Manage your reviews</h3>
          <div className='account-reviews-list'>
          {reviewList?.length > 0 && reviewList.map(review =>
            <ReviewCard manage={true} review={review}/>)}
          </div>
        </div>
      </div>
      </div>
    </div>

   )}

export default AccountPage;
