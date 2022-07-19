import React from 'react';
import Service from './Service';
import TeethWhitening from '../../assets/images/whitening.png'
import CavityFilling from '../../assets/images/cavity.png'
import Fluoride from '../../assets/images/fluoride.png'

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Teeth Whitening",
      img: TeethWhitening,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: CavityFilling,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      _id: 3,
      name: "Fluoride Treatment",
      img: Fluoride,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
  ]
  return (
   <div className='text-center my-28'>
    <h3 className='text-primary font-bold text-2xl'>Our Services</h3>
    <h1 className='text-4xl mb-5'>Services We Provide</h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
       {services.map(service=> <Service key={service._id} service={service}></Service>)}
    </div>
   </div>
  )
}

export default Services;