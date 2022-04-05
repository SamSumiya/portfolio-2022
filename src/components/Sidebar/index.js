import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'

export const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
    </div>
  )
}
