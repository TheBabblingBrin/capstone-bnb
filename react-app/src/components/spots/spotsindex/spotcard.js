import {useEffect, useState} from 'react'
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadSpotsThunk, removeSpotThunk} from '../../../store/spots';
import SpotFormModal from '../spotform/index'
import '.././index.css'




const SpotCard = ({spot, manage=false}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const [slides , setSlides] = useState([])
  const [next, setNext] = useState()
  const [prev, setPrev] = useState()
  const [dots, setDots] = useState()



  const slideImage = () => slides.forEach((slide)=>slide.style.transform = `translateX(-${currSlide * 100}%)`)

  let currSlide = 0


  useEffect(()=>{
    setTimeout(()=>{
      setSlides(document.querySelectorAll(`.spot-image${spot.id}`))
      setPrev(document.getElementById(`prev${spot.id}`))
      setNext(document.getElementById(`next${spot.id}`))
      setDots(document.querySelectorAll(`.dot-${spot.id}`))
    }, 200)
  },[spot?.id])
  const hideButtons = (num) =>{
    num === slides.length -1? next.style.visibility = 'hidden': next.style.visibility = 'visible'
    num === 0? prev.style.visibility = 'hidden': prev.style.visibility = 'visible'
    const currDots = Array.from(dots).map(dot => dot.id)
    dots.forEach(dot => dot.id === currDots[num]? dot.style.backgroundColor = 'white': dot.style.backgroundColor = 'rgba(156,166,154, .6)' )
  }

  const goNext = ()=>{
    if (currSlide === spot.images?.length -1) return
    currSlide ++
    slideImage()
    hideButtons(currSlide)
  }

  const goPrev = ()=>{
    if (currSlide === 0) return
    currSlide --
    slideImage()
    hideButtons(currSlide)

  }

  const getSpot =async ()=>{
    history.push(`/spots/${spot.id}`)
  }
  const deleteSpot = async (id) =>{
    let success = await dispatch(removeSpotThunk(id))
    if(success){
      dispatch(loadSpotsThunk())
    }
  }
  if(!spot) return <h1>Loading...</h1>
  let spotRating;
  let ratingArr = spot.avg_rating.toString().split('');

   if(spot.avg_rating === 0) spotRating = null;
   else if(Number.isInteger(spot.avg_rating)) spotRating = `${spot.avg_rating}.0`;
   else if(ratingArr.slice(2).length === 1) spotRating = spot.avg_rating;
   else spotRating = parseFloat(spot.avg_rating).toFixed(1);

  return(
    <div className={manage?'spot-card-wrapper manage':'spot-card-wrapper'}>
      <div className='single-slideshow'>
          {spot.images?.length > 0 && spot.images.map((image,idx) =>
          <div key ={image.id}className='spot-card-image-container'>

              <img
              alt=''
              onClick={() => getSpot()}
              className={`spot-card-image spot-image${spot.id}`}
              src={image.url}
              style={{left:`${idx *100}%`}}/>
          </div>
              )}
              <div className='slide-dots-wrapper'>
              {spot.images?.length > 0 && spot.images.map(image =>
                <div key ={`dot${image.id}`} className={`slide-dot dot-${spot.id}`} id={`slide-dot-${image.id}`}></div>
              )
              }
              </div>

      </div>
        <div className='slideshow-button-wrapper'>

          <div className='slideshow-button prev' id={`prev${spot.id}`}
          onClick={()=>goPrev()}>
          <div>&#10094;</div>
          </div>
        {spot?.images?.length >= 2 &&
          <div className='slideshow-button next' id={`next${spot.id}`}
          onClick={()=>goNext()}>
          <div>&#10095;</div>
          </div>
        }


        </div>
        <div className="spot-card-info-wrapper">
            <div className="spot-card-info-left">
               <div>
                  <span className="spot-card-location">{spot.city}, {spot.state}</span>
               <div className="spot-card-name">
                  {spot.name}
               </div>
            </div>
               <div className="spot-card-price-wrapper">
                  <span className='spot-card-price'>${spot.price}</span> night
               </div>
            </div>
            <div className={manage? "spot-card-info-right manage":"spot-card-info-right"}>
              {spotRating === null? null: `★${spotRating}`}
              {manage &&
              <div className='review-buttons'>
                <SpotFormModal update={true} spot={spot}/>
                <button
                  className='delete-review'
                  onClick={()=> deleteSpot(spot.id)}
                  ><i class="fa-solid fa-trash"></i></button>
              </div>

              }
            </div>
        </div>
    </div>
  )

}

export default SpotCard
