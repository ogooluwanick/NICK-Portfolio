import React,{useEffect,useState} from 'react'
import "./Skills.scss"
import ReactTooltip from "react-tooltip"

import AppWrap from "../../wrapper/AppWrap"
import {motion} from "framer-motion"
import { urlFor, client } from '../../client';
import MotionWrap from '../../wrapper/MotionWrap'




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
    <div className='app__skills'>
      <h2 className="head-text">Skills & Experience  </h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
            {
              skills.map((skill)=>(
                <motion.div whileInView={{opacity:[0,1 ]}} transition={{duration:0.5}} className="app__skills-item app__flex" key={skill.name}>
                    <div className="app__flex" style={{backgroundColor:skill.bgColor}}>
                      <img src={urlFor(skill.icon)} alt={skill.name} />
                    </div>
                    <p className="p-text">{skill.name}</p>
                </motion.div>
              ))
            }
        </motion.div>
        <div className="app__skills-exp">
          {experiences.sort((a,b)=> new Date(b._createdAt) - new Date(a._createdAt)).map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience._id}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work._key}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
     
      </div>

    </div>
  )
}

export default AppWrap(MotionWrap(Skills,"app__skills") ,"skills","app__whitebg")