import React from 'react'
import Heading from '../../basic/Heading'
import UpdateCard from './UpdateCard'
import './Update.css'


const Update = () => {
  return (
    <>
    <section className='update padding'>
      <div className='container'>
        <Heading sectionTitle='Latest Properties Arrivals' subtitle='Discover the Latest Listings for Your Next Home'/>
        <UpdateCard />
        <button className='btn3'>Show More</button>
      </div>
    </section>
    </>
  )
}

export default Update