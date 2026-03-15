import React from 'react'
import { featured } from '../../data/data'

const FeaturedCard = () => {
  return (
    <>
        <div className="content grid5 mtop">
            {featured.map((items, index) =>(
                <div className='box' key={index}>
                    <img src={items.cover} alt={items.name} />
                    <h4>{items.name}</h4>
                    <p>{items.total}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default FeaturedCard