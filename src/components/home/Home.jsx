import React from 'react'
import Hero from './Hero/Hero'
import About from './about/About'
import Featured from './featured/Featured'
import Update from './update/Update'
import Location from './location/Location'
import Agent from './agent/Agent'


const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Featured />
        <Update />
        <Location />
        <Agent />
    </>
  )
}

export default Home