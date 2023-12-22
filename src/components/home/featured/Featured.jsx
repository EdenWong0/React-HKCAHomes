import React from 'react'
import './featured.css'
import Heading from '../../basic/Heading'
import FeaturedCard from './FeaturedCard'


const Featured = () => {
  return (
    <>
        <section className='featured background'>
            <div className='container'>
              <Heading title="Discover Your Ideal Home in a New Land" subtitle="Explore a Variety of Rental Properties Perfect for Yourself" />
              <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Featured