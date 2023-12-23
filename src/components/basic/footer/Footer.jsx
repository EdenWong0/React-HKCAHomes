import React from 'react'
import './Footer.css'
import { footer } from '../../data/data'

const Footer = () => {
  return (
    <>
        <section className='footerContact'>
            <div className="container">
                <div className="send flex">
                    <div className="text">
                        <h1>Contact us if you have any Question!</h1>
                        <p>If you have any questions or concerns, our customer support team is here to assist you. We appreciate your feedback and strive to provide the best service.</p>
                    </div>
                    <button className='btn5'>Contact us Today</button>
                </div>
            </div>
        </section>

        <footer>
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <h2>Are you looking for any home?</h2>
                        <p>Receive latest released, hot deals in your inbox every month</p>
                        <div className="input flex">
                            <input type="text" placeholder="Email" name="" id=""/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                {footer.map((val) => (
                    <div className="box">
                        <h3>{val.title}</h3>
                        <ul>
                            {val.text.map((items) => (
                                <li>{items.list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
        <div className="legal">
            <span> © Copyright 2023 by HKCAHomes. All rights reserved.</span>
        </div>
    </>
  )
}

export default Footer