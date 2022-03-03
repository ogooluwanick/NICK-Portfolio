import React from 'react'
import {BsGithub,BsInstagram} from "react-icons/bs"
import { AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/ogooluwanick" target="_blank" rel="noreferrer" >
           <BsGithub/>
          </a>
           
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ogooluwa-olutimilehin"  target="_blank" rel="noreferrer" >
              <AiFillLinkedin/>
          </a>
        </div>
        <div>
          <a href=" https://www.instagram.com/extremenick_"  target="_blank" rel="noreferrer" >
            <BsInstagram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia