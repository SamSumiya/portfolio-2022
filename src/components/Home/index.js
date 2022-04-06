import './index.scss'
import React, { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetters } from '../AnimatedLetters'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'
import './index.scss'

export const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'm',' ','S','u','m','i','y','a']
  const jobArray = ['W','e','b','  ','D','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i </span>
          <span className={`${letterClass} _13`}>, </span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <img src={LogoTitle} alt="dev" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          {/* <img src={LogoTitle} alt="dev" />
          umiya */}
          <br />
          <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </span>
        </h1>
        <h2>Fullstack JavaScript Developer 🖥 + Kick Boxer 🥊 </h2>
        <Link to="" className="flat-button">
          Contact Me!
        </Link>
      </div>
      <Logo />
    </div>
  )
}
