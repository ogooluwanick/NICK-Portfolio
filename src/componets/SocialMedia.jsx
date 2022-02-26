import React from 'react'
import {BsTwitter,BsInstagram} from "react-icons/bs"
import { AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <AiFillLinkedin/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
  )
}

export default SocialMedia