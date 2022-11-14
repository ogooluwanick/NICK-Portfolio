import React from 'react'
import {BsGithub,BsInstagram} from "react-icons/bs"
import { AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
          <a href="https://github.com/ogooluwanick" target="_blank" rel="noreferrer" >
                <div>
                        <BsGithub/>
                </div>
          </a>
          <a href="https://www.linkedin.com/in/ogooluwa-olutimilehin"  target="_blank" rel="noreferrer" >
                <div>
                        <AiFillLinkedin/>
                </div>
          </a>
          <a href=" https://www.instagram.com/extremenick_"  target="_blank" rel="noreferrer" >
                <div>
                        <BsInstagram/>
                </div>
          </a>
    </div>
  )
}

export default SocialMedia