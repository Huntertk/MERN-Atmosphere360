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
    HomeMap
} from '../components/index'

const Home = () => {
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeWhyVisit />
      <HomWhatIsTheBest />
      {/* <HomeTicketExplaination /> */}
      <HomeHighlights />
      <HomeBuffetOption />
      {/* <HomeVisitPlan /> */}
      <HomeVisitorTips />
      <HomeMap />
      <HomeFaq />
     </section>
  )
}

export default Home