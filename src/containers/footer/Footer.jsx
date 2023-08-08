import React,{useState} from 'react'
import {motion} from "framer-motion"
import CircleLoader from "react-spinners/CircleLoader";
import validator from 'validator'
import axios from "axios"

import "./Footer.scss"
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from '../../wrapper/MotionWrap'
import {images } from "../../constants/constants"
import {client } from '../../client';
import { Fireworks } from '../../constants/Fireworks';


const Footer = () => {
    const [formData, setformData] = useState({name:"",email:"",message:""});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isRequiredFilled, setIsRequiredFilled] = useState(false);
    const [failedToSend, setFailedToSend] = useState(false)

    const [loading, setLoading] = useState(false);

    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')


    const {name,email,message}=formData;
    
    const handleChangeInput=(e)=>{
      const{name,value}= e.target

      setformData({...formData,[name]:value})
    }

  
    const validateName = (e) => {
      var localname = e.target.value

      const{name,value}= e.target
      setformData({...formData,[name]:value})
    
      if (localname==="") {
        setNameError('come on don’t be shy 😏')
      } else {
        setNameError('Nice 😉')
      }
    }


    const validateEmail = (e) => {
      var email = e.target.value

      const{name,value}= e.target
      setformData({...formData,[name]:value})
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email 😉')
      } else {
        setEmailError('Enter valid Email! 😏')
      }
    }


    const handleSubmit= async () => {

        if (name==="" || email==="" || message==="" || !validator.isEmail(email) ){
                return setIsRequiredFilled(true)
        }

        setLoading(true)

        const contact={
                _type:"contact",
                name:name,
                email:email,
                message:message
        }

        try {

                await client.create(contact)

                
                await axios.post("https://distinct-lamb-bedclothes.cyclic.app/api/ogo_portfolio/contact_us_email",{
                        contact
                })
        
                        
                setIsFormSubmitted(true)
                setFailedToSend(false)
                Fireworks()
        } 
        catch (error) {
                setFailedToSend(true)
                setIsRequiredFilled(false)
        }

        setLoading(false)
    }
  return (
    <div className='app__footer'> 
      <h2 className="head-text">Please feel free to reach out 🌹 </h2>
      <div className="app__footer-cards">
        <a href="mailto:extremeworkbench@gmail.com" className='app__footer-cards-links p-text'>
                <div className="app__footer-card">
                        <img src={images.gmail} alt="mailIMG" />
                        extremeworkbench@gmail.com
                </div>
        </a>
        <a href="tel: +234 912 101 7814" className='app__footer-cards-links p-text'>
                <div className="app__footer-card">
                <img src={images.mobile} alt="mobileIMG" />
                +234 912 101 7814
                </div>
        </a>
        <a href={images.ogoCV} download className='app__footer-cards-links p-text'>
                <div className="app__footer-card">
                <img src={images.cvicon} alt="CvIMG" />
                Download CV
                </div>
        </a>
      </div>

    
      {
        !isFormSubmitted?
          <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" name='name' value={name} required placeholder='Your Name...' onChange={(e) => validateName(e)}  />
          </div>
          <span className='p-text'>{nameError}</span> 
          <div className="app__flex">
            <input type='email' className="p-text" name='email' value={email} placeholder='Your Email...' required onChange={(e) => validateEmail(e)}   />
          </div>
          <span className='p-text'>{emailError}</span>
          <div className="">
            <textarea  className="p-text" name="message"  value={message} cols="30" rows="10" placeholder='Your Message...' onChange={handleChangeInput}></textarea>
          </div>

          <button className='p-text' type='button' onClick={handleSubmit} >{loading?(<CircleLoader color={"#fff"}   size={30} className="CircleLoaderSVG" />) :"Send Message"}</button>

          {
                isRequiredFilled ?
                        <motion.div whileInView={{y:[100,50,0],opacity:[0,0,1]}} transition={{duration:0.5}}>
                        <br />
                        <h3 className="head-text">Kindly fill form accurately!🙃</h3>
                        </motion.div>
                : failedToSend ?
                        <motion.div whileInView={{y:[100,50,0],opacity:[0,0,1]}} transition={{duration:0.5}}>
                        <br />
                        <h4 className="head-text" >Failed to send, Please try again. 🙏🏽</h4>
                        </motion.div>
                :""
          }

          </div>
        :
          <div className="app__footer-form app__flex">
            <motion.div whileInView={{y:[100,50,0],opacity:[0,0,1]}} transition={{duration:0.5}}>
              <h3 className="head-text">Thank you for Reaching Out! 😊</h3>
            </motion.div>
          </div>
      }
      


    </div>
  )
}

export default  AppWrap(MotionWrap(Footer,"app__footer") ,"contact","app__whitebg")