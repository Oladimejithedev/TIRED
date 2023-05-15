import React from 'react'
import '../Stylesheet/home.css'
import {FaTelegram} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <h2>Contact</h2>
        <a target='_blank' className='tele' href="http://t.me/pepecexportal"><FaTelegram/></a>
        <p>Copyright © 2023PEPECEX</p>
    </div>
  )
}

export default Contact