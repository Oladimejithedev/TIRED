import React from 'react'
import '../Stylesheet/navbar.css'
import { useState } from 'react'
import {RiMenuFill, RiCloseFill} from 'react-icons/ri';





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

    const [fix , setFix] = useState(false)

    function setFixed(){
        if(window.scrollY >= 20){
            setFix(true)
        }
        else setFix(false)

    }
    window.addEventListener("scroll", setFixed)



  return (
    <div className={fix? 'navbar fixed' : 'navbar'}>
            <div className="navbar_container">
                <div className="navbar-logo">
                    <a className='logo' href="#home">PEPE CEX</a>
                </div>
                <div className={`nav_link ${isOpen ? 'show_nav' : 'hide_nav'} `}>
                <a onClick={toggle} onBlur={hide} onFocus={show} href="#home">Home</a>
                <a onClick={toggle} onBlur={hide} onFocus={show}href="#roadmap">Roadmap</a>
                <a onClick={toggle} onBlur={hide} onFocus={show}href="#faq">Faq</a>
                <a onClick={toggle} onBlur={hide} onFocus={show}href="#contact">Contact</a>
                
                </div>

        <button className="nav_toggle" onClick={()=> setIsOpen(!isOpen)}>
            {
                isOpen ? <RiCloseFill/> :<RiMenuFill />
            }
        </button>
                              
            </div>



            
        </div>
  )
}

export default Navbar