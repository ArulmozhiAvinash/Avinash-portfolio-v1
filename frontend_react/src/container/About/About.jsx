import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type=="abouts"]'
    client.fetch(query).then((data) => setAbouts(data))
  }, [])
  return (
    <>
      <h2 className='head-text'>
        Crafting
        <span> Stellar Apps </span>
        <br />
        Elevating
        <span> Business Brilliance! </span>
      </h2>
      <br />

      <p className='p-text'>
        Greetings! I'm Avinash, and my passion lies in crafting digital entities
        that thrive on the internet. I've honed my skills through enriching
        experiences at Cognizant, GuardianLife, and DTCC, and I am currently
        dedicated to shaping accessible and inclusive products, as well as
        digital experiences at Arcadia. While my professional journey has taken
        me through diverse environments, my unwavering focus remains on
        developing solutions that are both impactful and efficient
      </p>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
