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
                                    <img src={val.cover} alt="" />
                                    <i className='fa fa-circle-check'>verified</i>
                                </div>
                                <i className='fa fa-location-dot'></i>
                                <label htmlFor=''>{val.address}</label>
                                <br />
                                <i className='fa fa-language'></i>
                                <label htmlFor=''>{val.Language}</label>
                                <h4>{val.name}</h4>

                                <ul>
                                    {val.icon.map((icon, index) => (
                                        <li key={index}>{icon}</li>
                                    ))}
                                </ul>
                                <div className="button flex">
                                    <button>
                                        <i className='fa fa-envelope'></i>
                                        Message
                                    </button>
                                    <button>
                                        <i className='fa fa-phone'></i>
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