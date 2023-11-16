import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isFormDisabled, setIsFormDisabled] = useState(true)
  //const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
    if (
      formData.username &&
      formData.username.length > 0 &&
      formData.email &&
      formData.email.length > 0 &&
      emailRegex.test(formData.email) &&
      formData.username.length > 0 &&
      formData.message &&
      formData.username.length > 0
    ) {
      setIsFormDisabled(false)
    }
  }
  // const onChange = (value) => {
  //   console.log(value)
  //   setIsCaptchaValid(true)
  // }

  // const validateHuman = async (value) => {
  //   const secret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
  //   const response = await fetch(
  //     `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${value}`,
  //     {
  //       method: 'POST',
  //     }
  //   )
  //   const data = await response.json()
  //   return data.success
  //   console.log('test')
  //   console.log('Captcha value:', value)
  // }
  const handleSubmit = () => {
    setIsFormDisabled(true)
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }

    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className='head-text'>
        Having some great ideas & want to collaborate contact me
      </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:avinsharulmozhi@gmail.com' class='p-text'>
            avinsharulmozhi@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +91-9894757162' class='p-text'>
            +91-9894757162
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <>
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input
                className='p-text'
                type='text'
                placeholder='Your Name'
                name='username'
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className='app__flex'>
              <input
                className='p-text'
                type='email'
                placeholder='Your Email'
                name='email'
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChangeInput}
              />
            </div>

            <button
              type='button'
              className='p-text'
              onClick={handleSubmit}
              disabled={isFormDisabled}
            >
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
