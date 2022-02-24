import React from 'react'
import "./Header.scss"

import { motion } from 'framer-motion'
import {images } from "../../constants/constants"

const  scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div whileInView={{x:[-100,0],opacity:[0,1]}} transition={{duration:0.5}} className='app__header-info'>
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>
                Hello there, I am
              </p>
              <h1 className='head-text'>
                Ogooluwa
              </h1>
            </div>
          </div> 

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div whileInView={{opacity:[0,1]}} transition={{duration:0.5, delayChildren:0.5}} className='app__header-img'>
        <img src={images.profile} alt="Profile"  />
        <motion.img whileInView={{scale:[0,1]}} transition={{duration:1, ease:"easeInOut"}} className='overlay_circle' src={images.circle} alt="Profile_Frame"/>
      </motion.div>

      <motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
        {[images.react,images.python,images.sass,images.photoshop,images.Adobe_Animate].map((circle,index)=>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circles" />
          </div>
        ))}
        
      </motion.div>
    </div>
  )
}

export default Header