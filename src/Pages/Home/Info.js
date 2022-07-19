import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <InfoCard bgClass="bg-green-300" cardTitle="Working Hours" img={clock}></InfoCard>
        <InfoCard bgClass="bg-blue-300" cardTitle="Our Location" img={marker}></InfoCard>
        <InfoCard bgClass="bg-green-300" cardTitle="Contact us" img={phone}></InfoCard>
    </div>
  )
}

export default Info;