import React from 'react';
import Heading from '../../basic/Heading'
import { about } from '../../data/data'
import './About.css';

const About = () => {
    
  return (
    <>
        <section className='about back'>
            <div className='container'>
                <Heading title='Who Are We?' subtitle='Exploring Our Identity and Commitment to You'></Heading>
                <p>
                Welcome to our vibrant community! We are a team of passionate individuals dedicated to providing you with an unparalleled experience in your search for the perfect home. At <strong>HKCAHmoes</strong>, we believe in more than just finding a place to live; we are committed to helping you discover a sense of belonging. Our mission is to simplify your journey, offering a diverse range of rental properties tailored to your needs. With a focus on transparency, trust, and personalized service, we invite you to explore the essence of who we are and the exceptional service we're excited to deliver to you. Welcome to a place where finding your ideal home is not just a process but a memorable journey with us.
                </p>
                <div className="content grid4 mtop">
                    {about.map((val,index) => {
                        return (
                        <div className='box' key={index}>       
                            <div className="icon">
                                <span>{val.icon}</span>
                            </div>
                            <h1>{val.num}</h1>
                            <p>{val.name}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default About