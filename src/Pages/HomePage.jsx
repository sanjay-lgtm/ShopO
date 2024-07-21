import React from 'react'
import Header from '../Components/Layout/Header'
import Hero from '../Components/Route/Hero/Hero'
import Categories from '../Components/Route/Categories/Categories'
import BestDeals from '../Components/Route/BestDeals/BestDeals'
import FeatureProduct from '../Components/Route/FeatureProduct/FeatureProduct'
import Events from '../Components/Route/Events/Events'
import Sponsored from '../Components/Sponsored/Sponsored'
import Footer from '../Components/Layout/Footer'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeatureProduct/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default HomePage
