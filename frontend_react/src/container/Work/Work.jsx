import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Work.scss'

const Work = () => {
  const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [works, setWorks] = useState([])
  const [filteredWorks, setFilteredWorks] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]'
    client.fetch(query).then((data) => {
      setWorks(data)
      setFilteredWorks(data)
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCart([{ y: 100, opacity: 0 }])
    setTimeout(() => {
      setAnimateCart([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilteredWorks(works)
      } else {
        setFilteredWorks(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <>
      <h2 className='head-text'>
        My creative
        <span> Portfolio </span>
        section
      </h2>
      <div className='app__work-filter'>
        {
          //['JavaScript', 'REST API', 'React Js', 'All'].map((item, index) => (
          ['JavaScript', 'React Js', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          ))
        }
      </div>
      <motion.div
        animate={animateCart}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filteredWorks.map((work, index) => (
          <div key={index} className='app__work-item app__flex'>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content  app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className='app__work-tag app__flex'>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.tags[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')
