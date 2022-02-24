import React, {useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import {images } from "../../constants/constants"
import "./About.scss"

const about =
[
  {title:"Web Development", description: "I am a good Web Dev with a degree in Information Tech.",imgUrl:images.about01},
  {title: "Graphic Design",description:"Great digital graphic knowledge",imgUrl:images.about02j},
  {title: "Animator",description:"Great knowledge in Adobe Animate",imgUrl:images.about03j},
  {title: "Python Programmer",description:"Graduate level knowledge python",imgUrl:images.about04},

 
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know 
        <span> Good Designs </span>
        <br />
        mean
        <br /> 
        <span> Good Business</span>
      </h2>
      
      <div className="app__profiles">
        {about.map((about, index)=>(
          <motion.div className='app__profile-item'
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.6,type:"Tween" }}
            key={about.title+index}
          >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{marginTop:" 20px"}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:" 10px"}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About