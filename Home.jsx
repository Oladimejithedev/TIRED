import React from 'react'
import '../Stylesheet/home.css'
import pepecex from '../Image/pepecex.jpg'
import {FaTelegram} from 'react-icons/fa'

const Home = () => {
  return (
    <div className="home" id='home'>
      <img className='pepe' src={pepecex} alt="" />
      <div className="home_text">
        <h4>ABOUT PEPE CEX</h4>
        <h2>WE ARE HERE AND READY TO ACCOMPANY YOU IN SPACE TRAVEL WITH PEPE CEX</h2>
        <p>Please keep a close eye on the official social channels</p>

        <a target='_blank' className='telegram' href="http://t.me/pepecexportal"><FaTelegram/></a>
      </div>
    </div>
  )
}

export default Home