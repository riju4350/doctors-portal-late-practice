import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointment = (props) => {
    const {date} = props;
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{
      fetch('http://localhost:5000/services')
      .then(res=> res.json())
      .then(data=> setServices(data))
    },[]);
  return (
    <div className='mb-28'>
        <p className='text-xl text-secondary text-center mb-10'> Available Appointments on: {format(date, 'PP')}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment}></Service>)}
        </div>
        {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
    </div>
  )
}

export default AvailableAppointment;

// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/riju4350/doctors-portal-late-practice.git
// git push -u origin main

// git config --global user.email riju4350@gmail.com
// git config --global user.name riju4350