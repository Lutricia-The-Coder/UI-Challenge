import React from 'react'
import Holiday from '../assets/holiday.png'
import Cupcakes from '../assets/cupcake.png'
import HolidayCollection from '../assets/holiday-collection.png'
import Logo from '../assets/logo1.png'

const Advertisment = () => {
  return (
   <div className='collection-layout'>
    <div className='logo'>
 <img src={Logo} alt='logo'></img>
    </div>
 
    <div className='bottom-images'>
     
      
        <div className="image-card">
          <img src={Holiday} alt="Holiday Special" />
          <div className="text-overlay">
            <h3 className="title">Holiday</h3>
            <p className="discount">– 20% OFF</p>
            <button className="cta1">ORDER TODAY</button>
          </div>
        </div>

  
        <div className="image-card">
          <img src={Cupcakes} alt="Cupcakes" />
          <div className="text-overlay">
            <button className="cta">ORDER TODAY</button>
          </div>
        </div>

     
        <div className="image-card">
          <img src={HolidayCollection} alt="Holiday Collection" />
          <div className="text-overlay">
            <h3 className="title1">Holiday Collection</h3>
            <p className="discount-par">Celebrate every bite</p>
            <p className="discount1">20% OFF</p>
            <button className="cta">ORDER NOW</button>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Advertisment

  