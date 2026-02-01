import React from 'react'
import HomeHero from './Sections/HomeHero/HomeHero'
import Divisions from './Sections/Divisions/Divisions'
import AboutUs from './Sections/AboutUs/AboutUs'
import Clients from './Sections/Clients/Clients'
import AboutCEO from './Sections/AboutCEO/AboutCEO'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <Divisions/>
    <AboutUs/>
    <Clients/>
    <AboutCEO/>
    </>
  )
}

export default Home