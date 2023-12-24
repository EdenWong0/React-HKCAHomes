import React from 'react'
import './Location.css'
import { location } from '../../data/data'
import Heading from '../../basic/Heading'

const Location = () => {
  return (
    <>
        <section className='location padding'>
            <div className="container">
                <Heading title='Discover by Location' subtitle='Uncover Hidden Gems in Every Neighborhood'/>
                <div className="content grid3 mtop">
                    {location.map((items,index) => {
                        return (
                        <div className="box" key={index}>
                            <img src={items.cover} alt='' />
                            <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.Houses}</label>
                                    <label>{items.Condos}</label>
                                    <label>{items.Apartments}</label>
                                </p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Location