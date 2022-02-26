import React,{useEffect,useState} from 'react'
import AppWrap from "../../wrapper/AppWrap"
import {motion} from "framer-motion"
import { urlFor, client } from '../../client';


import "./Work.scss"


const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setanimateCard] = useState({y:0,opacity: 1 })
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter=(item)=>{

  }

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])
  
  return (
    <>
      <h2 className='head-text'>
        My Creative 
        <span> Portfolio </span>
      </h2>

      <div className="app__work-filter">
        {
          ["Inventory Management System","Pyhon Project","Mobile App","Animation Project","Game","All"].map((item,index)=>(
            <div key={index} onClick={()=>handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter=== item?"item-active":""}}`}>
              {item}
            </div>
          ))
        }
      </div>

      <motion.div animate={animateCard} transition={{duration:0.5, delayChildren:0.5}} className="app__work-portfolio">
        {
          filterWork.map((work,index)=>(
            <div className="app__work-item app__flex" key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.work} />
              </div>

            </div>
          ))
        }
      </motion.div>
    </>
  )
}

export default Work