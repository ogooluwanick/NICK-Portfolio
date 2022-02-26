import React, {useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import "./About.scss"
import AppWrap from '../../wrapper/AppWrap';

import { urlFor, client } from '../../client';


const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I know 
        <span> Good Development </span>
        <br />
        means
        <br /> 
        <span> Good Business</span>
      </h2>
      
      <div className="app__profiles">
        {abouts.reverse().map((about, index)=>(
          <motion.div className='app__profile-item'
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.6,type:"Tween" }}
            key={about.title+index}
          >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{marginTop:" 20px"}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:" 10px"}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, "about") 