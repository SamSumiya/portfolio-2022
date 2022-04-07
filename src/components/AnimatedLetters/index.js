import './index.scss'
import React from 'react'

export const AnimatedLetters = ({ letterClass, strArray, idx }) => {

  return (
    <span> 
      {
        strArray.map((char, i) => (
          <span key={i + char} className={`${letterClass} _${i + idx}`}>
            { char }
          </span>
        ))
      }
    </span>
  )
}
