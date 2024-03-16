import React from 'react'
import '../styles/home.scss'
import {
    HomeTopContainer,
    HomeCardContainer,
    HomeWhyVisit,
    HomWhatIsTheBest,
    HomeTicketExplaination,
    HomeHighlights,
    HomeBuffetOption,
    HomeVisitPlan,
    HomeVisitorTips,
    HomeFaq,
    HomeMap,
    HomeAdditionalInformation
} from '../components/index'
import HomeMenu from '../components/HomeMenu'

const Home = () => {
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeMenu />
      <HomeWhyVisit />
      <HomWhatIsTheBest />
      {/* <HomeTicketExplaination /> */}
      <HomeHighlights />
      <HomeBuffetOption />
      {/* <HomeVisitPlan /> */}
      <HomeAdditionalInformation />
      {/* <HomeVisitorTips /> */}
      <HomeMap />
      <HomeFaq />
     </section>
  )
}

export default Home