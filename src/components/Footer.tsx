import React from 'react'
import Footer1Img from '../assets/footer1.png'
import Footer2Img from '../assets/Footer2.png'

const Footer = () => {
  return (
  <footer className="footer">
  
      <div className="footer-banner1">
        <img src={Footer1Img} alt="Footer banner" />
      </div>

  
      <div className="footer-ad">
       <div className="footer-banner2">
        <img src={Footer2Img} alt="Footer banner" />
      </div>
        
      </div>

      
    <div>
<h5 className='bout-us'>
  Faithful Bee Bites
</h5>
      <div className="social-icons">
  <a href="#"> <i className="bi bi-facebook"></i></a>
  <a href="#"> <i className="bi bi-linkedin"></i></a>
  <a href="#"><i className="bi bi-pinterest"></i></a>
</div>
        <div className='lastline'>
          <p>
Freshly Frosted Favorites
          </p>
        </div>
      </div>
  </footer>
  )
}

export default Footer
