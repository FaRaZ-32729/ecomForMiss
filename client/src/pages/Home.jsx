import React from 'react'
import Banner from '../components/Banner'
import MultiBanner from '../components/MultiBanner'
import Collections from '../components/Collections'
import MidBanner from '../components/MidBanner'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <Banner/>
      <MultiBanner/>
      <Collections/>
      <MidBanner/>
      <TopSellers/>
      <Features/> 
    </div>
  )
}

export default Home
