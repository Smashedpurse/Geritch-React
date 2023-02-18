import React from 'react'
import {NavBar} from './components/index'
import {Header,AboutUs,SpecialMenu,Chef,Intro,Laurels,Gallery,FindUs,Footer} from './containers/index'
import './App.css'

const App = () => {
  return (
    <div>
    <NavBar/>
    <Header/>
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />       
    </div>
  )
}

export default App