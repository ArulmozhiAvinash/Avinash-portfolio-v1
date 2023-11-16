import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://www.linkedin.com/in/avinash-arulmozhi-840997b8/'
          target='_blank'
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href='https://www.facebook.com/avinash.arulmozhi.7/' target='_blank'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/arulmozhiavinash/' target='_blank'>
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
