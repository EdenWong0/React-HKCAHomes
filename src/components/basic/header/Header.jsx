import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/data"
import { Link } from "react-router-dom"



const Header = () => {
  return (
    <>
        <header>
            <div className="container flex">
                <div className='logo'>
                    <img src="../images/hkcahomesLogo.png" alt=""/>
                </div>
                <div className='nav'>
                  <ul className='flex'>
                    {nav.map((list, index) => (
                      <li key={index}>
                        <Link to={list.path}>{list.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='button flex'>
                  <h4>
                    <span>2</span> My List
                  </h4>
                    <button className='btn1'>
                      <i className='fa fa-sign-out'></i> Sign In
                    </button>
                </div>
                <div className='toggle'>
                    <button>
                      <i className='fa fa-bars'></i>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header