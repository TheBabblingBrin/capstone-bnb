import {useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSpotThunk, loadSpotsThunk, updateSpotThunk } from '../../../store/spots';
import '.././index.css'




const SpotCard = ({spot}) =>{
  const dispatch = useDispatch()
  const history = useHistory()
  const spots = useSelector(state => state.spots.allSpots)
  const [slides , setSlides] = useState([])
  const slideImage = () => slides.forEach((slide)=>slide.style.transform = `translateX(-${currSlide * 100}%)`)

  let currSlide = 0

  useEffect(()=>{
    setTimeout(()=>{
      setSlides(document.querySelectorAll(`.spot-image${spot.id}`))
    }, 200)
  },[])

  const goNext = ()=>{
    if (currSlide === spot.images?.length -1) return
    currSlide ++
    slideImage()
  }

  const goPrev = ()=>{

    if (currSlide === 0) return
    currSlide --
    slideImage()
  }

  const getSpot =async ()=>{
    history.push(`/spots/${spot.id}`)
  }

  if(!spot) return <h1>Loading...</h1>

  return(
    <div className='spot-card-wrapper'>
    <div className='single-slideshow'>
        {spot.images?.length > 0 && spot.images.map((image,idx) =>
        <div className='spot-card-image-container'>

            <img className={`spot-card-image spot-image${spot.id}`}  src={image.url} style={{left:`${idx *100}%`}}/>
            {/* <button onClick={()=> deleteImage(image.id)}>Remove Image</button> */}

        </div>
            )}

    </div>
    <div className='slideshow-button-wrapper'>
    {

    <div className='slideshow-button prev'
    onClick={()=>goPrev()}>
    <a>&#10094;</a>

    </div>
    }


    <div className='slideshow-button next'
    onClick={()=>goNext()}>
    <a>&#10095;</a>
    </div>

    </div>

    <button
    onClick={() => getSpot()}
    >Load Spot</button>
    </div>
  )

}

export default SpotCard
