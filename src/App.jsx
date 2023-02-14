import React from 'react'
import { NavBar } from './components/index'
import {Header, AboutUs,SpecialMenu} from './containers/index'

const App = () => {
  return (
    <div>
    <NavBar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    {/* 
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />   */}
    </div>
  )
}

export default App