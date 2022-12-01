
import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './index.css';
import { loadReviewsThunk } from '../../store/reviews';
import ReviewCard from '../reviews/reviewcard';

function AccountPage (){
   const dispatch = useDispatch();
   const user = useSelector(state => state.session.user)
   const userReviews = useSelector(state => state.reviews.allReviews)
   let reviewList

   useEffect(() => {
    dispatch(loadReviewsThunk())
   }, [])

   useEffect(() =>{

   }, [userReviews])

   if(userReviews){
    reviewList = Object.values(userReviews)
    console.log(reviewList)
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
