import React, { useState } from 'react'
import "./Navbar.scss"
import {images } from "../../constants/constants"
import {HiX} from "react-icons/hi"
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="#home">
          <img src={images.logopng}  alt="logo" />
        </a>
      </div>
      <ul className='app__navbar-links'>
        {
          [
            "home","about","work","skills","testimonials","contact"
          ].map((item)=>(
              <li  className='app__flex p-text' key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
          ))
        }
      </ul>

      

      <div className="app__navbar-menu">
                <span id="menu-btn" class={`block  hamburger ${toggle&&"open"}`}  onClick={()=>setToggle(val=>!val)}>
                        <span class="hamburger-1"></span>
                        <span class="hamburger-2"></span>
                        <span class="hamburger-3"></span>
                </span>
        
          {
            toggle && (
              <motion.div  whileInView={{opacity:[0,1]}}  transition={{duration:.5, type:"easeOut"}} >
                <HiX onClick={()=>setToggle(false)}/>
                
                <ul>
                  {
                    ["home","about","work","skills","testimonials","contact" ].map((item)=>(
                        <li  className='' key={item}>
                          <a href={`#${item}`} onClick={()=>setToggle(false)}> {item} </a>
                        </li>
                    ))
                  }
                </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar