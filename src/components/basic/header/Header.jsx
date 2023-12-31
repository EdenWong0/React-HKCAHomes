import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/data"
import { Link } from "react-router-dom"



const Header = () => {
  const [navlist, setnavlist] = useState(false)
  return (
    <>
        <header>
            <div className="container flex">
                <div className='logo'>
                    <img src="../images/hkcahomesLogo.png" alt=""/>
                </div>
                <div className='nav'>
                  <ul className={navlist ? "small" : "flex"}>
                    {nav.map((list, index) => (
                      <li key={index}>
                        <Link to={list.path}>{list.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='button flex'>
                    <button className='btn1'>
                      <i className='fa fa-sign-out'></i> Sign In
                    </button>
                </div>
                  <div className='toggle'>
                      <button onClick={() => setnavlist(!navlist)}>
                        {navlist? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                      </button>
                  </div>
            </div>
        </header>
    </>
  )
}

export default Header