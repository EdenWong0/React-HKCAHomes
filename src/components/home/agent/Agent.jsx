import React from 'react'
import Heading from '../../basic/Heading'
import { agent } from '../../data/data'
import './Agent.css'

const Agent = () => {
  return (
    <>
        <section className='agent background'>
            <div className="container">
                <Heading title='Cooperated Sales Representative' subtitle='Your Trusted Partners Verified By HKCAHomes'/>

                <div className="content mtop grid3">
                    {agent.map((val,index) => {
                        return(
                            <div className='box' key={index}>
                            <button className='btn3'>{val.list} Listings</button>
                            <div className="details">
                            <div className="img">
                                <img src={val.cover} alt={val.name} />
                                <i className="fa-solid fa-circle-check verified"></i>
                            </div>

                            <p className="location">
                                <i className="fa-solid fa-location-dot"></i>
                                {val.address}
                            </p>

                            <p className="language">
                                <i className="fa-solid fa-language"></i>
                                {val.Language}
                            </p>

                            <h4>{val.name}</h4>

                            <ul className="social">
                                {val.icon.map((icon, index) => (
                                <li key={index}>{icon}</li>
                                ))}
                            </ul>

                            <div className="button">
                                <button className="message">
                                <i className="fa fa-envelope"></i>
                                Message
                                </button>

                                <button className="contact">
                                <i className="fa fa-phone"></i>
                                Contact
                                </button>
                            </div>
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

export default Agent