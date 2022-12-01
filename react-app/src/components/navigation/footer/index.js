import '../index.css'
const FooterBar = () =>{
return(
  <div className="footer-bar">
    <div className='dev-meta-data'>
      <input
        className='github-logo'
        type='image'
        alt='logo'
        src='https://res.cloudinary.com/degkakjou/image/upload/v1669927986/AirBnB/kindpng_1419051_jhlduu.png'
        onClick={()=> window.open('https://github.com/TheBabblingBrin/capstone-bnb')}
      ></input>
      <input
        className='in-logo'
        type='image'
        alt='logo'
        src='https://res.cloudinary.com/degkakjou/image/upload/v1669928817/AirBnB/pngfind.com-linkedin-png-3002025_xdvg6d.png'
        onClick={()=> window.open('https://www.linkedin.com/in/brin-hoover-6a3584251/')}
      ></input>
    </div>
    <div className='logo-button-container'>
      <input
        className='footer-abnd-logo'
        type='image'
        alt='logo'
        src='https://res.cloudinary.com/degkakjou/image/upload/v1669927443/AirBnB/pngfind.com-colourpop-logo-png-5669998_cnr6iz.png'
        onClick={()=> window.open('https://www.airbnb.com/')}
      ></input>
    </div>
  </div>
)
}

export default FooterBar
