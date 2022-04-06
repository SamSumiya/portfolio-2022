import './index.scss'
import React from 'react'
import { Sidebar } from '../Sidebar'
import { Home } from '../Home'


export const Layout = () => {

  return (
    <div className="App">
      <Sidebar />
      <Home />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        {/* <Outlet /> */}
        <span className="tags bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
