import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react'
import './index.css'

function ErrorDisplay({errors, id}) {
  const dispatch = useDispatch()
  const noErrorBorder = '1px solid rgba(107, 106, 106, 0.5)'
  const nodes = document.getElementsByTagName('form');
  const splashInputs = document.getElementsByClassName('login-input')
  useEffect(() => {

  },[errors])


  for(let field of splashInputs){

    if(field.id === 'spot-name'){
      (errors.includes('name : This field is required.')||errors.includes('email : Please enter a valid e-mail address.')||
      errors.includes('email : Email address is already in use.')||errors.includes('email : Please enter an e-mail under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-price'){
      (errors.includes('price : This field is required.')||errors.includes('price : Please enter a reasonable price.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-address'){
      (errors.includes('address : This field is required.')||errors.includes('address : Please enter an address under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-city'){
      (errors.includes('city : This field is required.')||errors.includes('city : Please enter an address under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-state'){
      (errors.includes('state : This field is required.')||errors.includes('state  : Please enter an address under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-country'){
      (errors.includes('country : This field is required.')||errors.includes('country  : Please enter an address under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'spot-description'){
      (errors.includes('description : This field is required.')||errors.includes('description  : Please enter an address under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'image-1'){
      (errors.includes('Image 1 : Please use a valid image URL (https://ex.jpg/jpeg/png)')||
      errors.includes('Image : Please upload at least one image.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'image-2'){
      (errors.includes('Image 2 : Please use a valid image URL (https://ex.jpg/jpeg/png)')||
      errors.includes('Image : Please upload at least one image.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'image-3'){
      (errors.includes('Image 3 : Please use a valid image URL (https://ex.jpg/jpeg/png)')||
      errors.includes('Image : Please upload at least one image.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'sign-up-email'){
      (errors.includes('email : Please enter an email')||errors.includes('email : Please enter a valid e-mail address.')||
      errors.includes('email : Email address is already in use.')||errors.includes('email : Please enter an e-mail under 255 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }

    if(field.id === 'sign-up-firstName'){
      (errors.includes('firstName : This field is required.')
      ||errors.includes('firstName : Please enter a first name under 200 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }

    if(field.id === 'sign-up-lastName'){
      (errors.includes('lastName : This field is required.')
      ||errors.includes('lastName : Please enter a last name under 200 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }

    if(field.id === 'sign-up-profile-pic'){
      (errors.includes('profile_pic : Please use a valid image URL (https://ex.jpg/jpeg/png)'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }

    if(field.id === 'sign-up-password'){
      (errors.includes('password : This field is required.')
      ||errors.includes('password : Please enter a password under 60 characters.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }

    if(field.id === 'sign-up-confirm-password'){
      (errors.includes('Passwords do not match'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'login-password'){
      (errors.includes('password : This field is required.')
      |errors.includes('password : No such user exists.')
      |errors.includes('password : Password was incorrect.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
    if(field.id === 'login-email'){
      (errors.includes('email : This field is required.')
      |errors.includes('email : Please enter a valid e-mail address.')
      |errors.includes('email : Email provided not found.'))?
      field.classList.add('error-border'):field.classList.remove('error-border')
    }
  }

  for(let node of nodes){
    if(node?.hasChildNodes()){
      for( let form of node.childNodes.values()){
       if(form.nodeName === 'INPUT') {
        let formPH = form.placeholder
            // form.style.border = noErrorBorder

            if(formPH === 'Email'){
              (errors.includes('email : This field is required.')
              |errors.includes('name : Server name is already in use.'))?
              form.classList.add('error-border'):form.classList.remove('error-border')
            }

            if(formPH === 'Server Image'){
              (errors.includes('preview_img : Please use a valid image URL (https://ex.jpg/jpeg/png)'))?
              form.classList.add('error-border'):form.classList.remove('error-border')
            }

            if(formPH === 'Channel Name'){
              (errors.includes('name : Please enter a channel name'))?
              form.classList.add('error-border'):form.classList.remove('error-border')
            }
       }
      }
    }
  }


  return (

            <ul className='error-list' id={id}>
                {errors.map((error) => (
                            <li key={error}><i className='fa fa-exclamation-circle' /> {error} </li>
                        ))}
            </ul>
  )
}

export default ErrorDisplay;
