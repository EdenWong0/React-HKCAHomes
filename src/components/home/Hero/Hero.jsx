import React, { useEffect, useState } from 'react'
import Heading from '../../basic/Heading'
import "./hero.css"


const Hero = () => {

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImageList = [
    'url("../../../../public/images/background.png")',
    'url("../../../../public/images/background1.jpg")',
  ];

  useEffect(() => {
    // Function to rotate background image every 5 seconds
    const rotateBackground = () => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImageList.length);
    };

    // Set up an interval to rotate the background image
    const intervalId = setInterval(rotateBackground, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
        <section className='hero'>
            <div className='container'>
                <Heading title='The best is here for you!' subtitle='Find the most situable one for yourself'/>
                <form className='flex'>
                    <div className='box'>
                        <span>Location</span>
                        <select>
                            <option value='North York'>North York</option>
                            <option value='Markham'>Markham</option>
                            <option value='Richmond Hill'>Richmond Hill</option>
                            <option value='Scarborough'>Scarborough</option>
                            <option value='Vaughan'>Vaughan</option>
                            <option value='Etobicoke'>Etobicoke</option>
                            <option value='Mississauga'>Mississauga</option>                       
                        </select>
                    </div>
                    <div className='box'>
                        <span>Property Type</span>
                        <select>
                            <option value='Apartment'>House</option>
                            <option value='Townhouse'>Townhouse</option>
                            <option value='Condo'>Condo</option>
                            <option value='Apartment'>Apartment</option>
                            <option value='Apartment'>Basement</option>
                        </select>
                    </div>
                    <div className='box'>
                        <span>Price</span>
                        <input type='text' placeholder='Enter the price here' />
                    </div>
                  <div className='box'>
                    <h5>Advance Filter</h5>
                  </div>
                  <button className='btn'>
                    <i className='fa fa-search'></i>
                  </button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Hero