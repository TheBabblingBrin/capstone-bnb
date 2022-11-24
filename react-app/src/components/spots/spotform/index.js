import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSpotThunk, updateSpotThunk, loadSpotsThunk } from '../../../store/spots';
import ErrorDisplay from '../../auth/ErrorDisplay'

const SpotForm = ({update = false}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const spot = useSelector(state => state.spots.currentSpot.spot)
  const user = useSelector(state => state.session.user)

  const [name, setName] = useState(update? spot.name:'')
  const [address, setAddress] = useState(update? spot.address:'')
  const [city, setCity] = useState(update? spot.city:'')
  const [state, setState] = useState(update? spot.state:'')
  const [country, setCountry] = useState(update? spot.country:'')
  const [description, setDescription] = useState(update? spot.description:'')
  const [price, setPrice] = useState(update? spot.price:'')
  const [image1, setImage1] = useState(update && spot.images.length >0? spot.images[0].url: '')
  const [image2, setImage2] = useState(update && spot.images.length >1? spot.images[1].url: '')
  const [image3, setImage3] = useState(update && spot.images.length >2? spot.images[2].url: '')
  const [errors, setErrors] = useState([]);

  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateImage1 = (e) => setImage1(e.target.value)
  const updateImage2 = (e) => setImage2(e.target.value)
  const updateImage3 = (e) => setImage3(e.target.value)



  useEffect(()=>{
    dispatch(loadSpotsThunk())
  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const images = [image1, image2, image3]

    const payload = {
      ownerId:user.id,
      name,
      address,
      city,
      state,
      country,
      description,
      price,
      images
    };
    let newspot = !update? await dispatch(addSpotThunk(payload)): await dispatch(updateSpotThunk(payload,spot?.id))
    if(newspot.errors){
      setErrors(newspot.errors)
      return
    }
    if(newspot){
      console.log('NEWSTUFF',newspot)
      dispatch(loadSpotsThunk())
      history.push(`/spots/${newspot?.spot.id}`)
      // setShowModal(false)
    }
  }


  return(
    <form className='spot-form' onSubmit={handleSubmit}>
      <div>
          <ErrorDisplay id={'spot-error-list'} errors={errors}/>
        </div>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={updateName}/>
      <input
        type='text'
        placeholder='Address'
        value={address}
        onChange={updateAddress}/>
      <input
        type='text'
        placeholder='City'
        value={city}
        onChange={updateCity}/>
      <input
        type='text'
        placeholder='State'
        value={state}
        onChange={updateState}/>
       <input
        type='text'
        placeholder='Country'
        value={country}
        onChange={updateCountry}/>
       <textarea
        type='textarea'
        placeholder='Description'
        value={description}
        onChange={updateDescription}/>
        <input
        type='number'
        value={price}
        onChange={updatePrice}/>
        <input
        type='text'
        placeholder='Image 1'
        value={image1}
        onChange={updateImage1}/>
        <input
        type='text'
        placeholder='Image 2'
        value={image2}
        onChange={updateImage2}/>
        <input
        type='text'
        placeholder='Image 3'
        value={image3}
        onChange={updateImage3}/>
      <button className='create-spot-submit' type='submit'>{update? 'Update':'Post'}</button>

    </form>
  )
}

export default SpotForm
