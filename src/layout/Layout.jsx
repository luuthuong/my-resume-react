import React from 'react'

import './layout.scss';

import CircleNavigation from './../component/circle-nav/CircleNavigation';

import Landing from '../component/landing/Landing';

const Layout = () => {
  return (
    <div className="layout">
      <Landing/>
      <CircleNavigation/>
    </div>
  )
}

export default Layout