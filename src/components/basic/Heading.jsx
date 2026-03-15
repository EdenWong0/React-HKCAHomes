import React from 'react'

const Heading = ({ title, sectionTitle, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <h2>{sectionTitle}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading