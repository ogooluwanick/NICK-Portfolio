import React,{useEffect,useState} from 'react'
import "./Skills.scss"
import ReactTooltip from "react-tooltip"

import AppWrap from "../../wrapper/AppWrap"
import {motion} from "framer-motion"
import { urlFor, client } from '../../client';




const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
      const ep_query = '*[_type == "experiences"]';
      const sk_query = '*[_type == "skills"]';

      client.fetch(ep_query).then((data) => {
        setExperiences(data);
      })

      client.fetch(sk_query).then((data) => {
        setSkills(data);
      })
    }, [])
  return (
    <div>
      <h2 className="head-text">Skills & Experience  </h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
            {
              skills.map((skill)=>(
                <motion.div whileInView={{opacity:[0,1 ]}} transition={{duration:0.5}} className="app__skills-item app__flex" key={skill.name}>
                    <div className="app__flex" style={{backgroundColor:skill.bgColor}}>
                      <img src={urlFor(skill.icon)} alt={skill.name} />
                    </div>
                </motion.div>
              ))
            }
        </motion.div>
      </div>

    </div>
  )
}

export default Skills