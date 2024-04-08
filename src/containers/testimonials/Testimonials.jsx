import React,{useEffect,useState} from 'react'
import "./Testimonials.scss"
import {HiChevronLeft,HiChevronRight} from "react-icons/hi"

import AppWrap from "../../wrapper/AppWrap"
import {AnimatePresence, motion} from "framer-motion"
import { urlFor, client } from '../../client';
import MotionWrap from '../../wrapper/MotionWrap'



const Testimonials = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick=(index)=>{
        setCurrentIndex(index)
    }

    useEffect(() => {
      const br_query = '*[_type == "brands"]';
      const test_query = '*[_type == "testimonials"]';

      client.fetch(br_query).then((data) => {
        setBrands(data);
      })

      client.fetch(test_query).then((data) => {
        setTestimonials(data);
      })
    }, [])

  return (
    <div>
      {
        testimonials.length ? (
          <>
          <AnimatePresence exitBeforeEnter>

                <motion.div key={currentIndex} className="app__testimonial-item app__flex" initial={{ opacity:0, y: "10%" }} animate={{ opacity: 1 , y: "0"}} exit={{ opacity: 0, y: "10%"}} transition={{ type: "spring", bounce: 0.3, duration: 0.2 }}>
                <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials.company} />
                <div className="app__testimonial-content">
                        <p className="p-text">{testimonials[currentIndex].feedback} </p>
                        <div>
                        <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                        <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                        </div>
                </div>
                </motion.div>
          </AnimatePresence>



            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={()=> handleClick( currentIndex===0? testimonials.length -1: currentIndex - 1)}>
                <HiChevronLeft/>
              </div>
              <div className="app__flex" onClick={()=> handleClick( currentIndex=== testimonials.length -1? 0: currentIndex + 1)}>
                <HiChevronRight/>
              </div>
            </div>
          </>
        )
        :""
      }

      <div className="app__testimonial-brands app__flex">
        {
          brands.map((brand)=>(
            <motion.div whileInView={{opacity:[0,1]}}  transition={{duration:.5, type:"tween"}} key={brand._id}>
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Testimonials,"app__testimonials") ,"testimonials","app__primarybg")