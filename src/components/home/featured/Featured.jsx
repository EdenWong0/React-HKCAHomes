import React from 'react'
import './featured.css'
import Heading from '../../basic/Heading'
import FeaturedCard from './FeaturedCard'


const Featured = () => {
  return (
    <>
        <section className='featured background'>
            <div className='container'>
                <Heading title='Featured Property Types' subtitle='Find all type of property'/>
                <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Featured