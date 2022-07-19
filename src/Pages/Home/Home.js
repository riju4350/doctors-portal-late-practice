import React from 'react'
import Contact from './Contact'
import Banner from './Banner'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'
export default function Home() {
  return (
    <div className=''>
    <Banner></Banner>
    <Info></Info>
    <Services></Services>
    <MakeAppointment></MakeAppointment>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
    </div>    
  )
}
