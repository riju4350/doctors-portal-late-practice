import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';

const MakeAppointment = () => {
  return (
    <section style={{background:`url(${appointment})`}} className='flex justify-center items-center mt-[150px]'>
        <div className='flex-1 hidden lg:block'>
            <img src={doctor} className="mt-[-150px]" alt='doctorImage'/>
        </div>
        <div className='flex-1 p-5
        '>
            <h1 className='text-xl text-primary font-bold'>Appointment</h1>
            <h3 className='text-3xl text-white my-4'>Make an Appointment today</h3>
            <p className='mb-8'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <PrimaryBtn>Make Appointment</PrimaryBtn>
        </div>
    </section>
  )
}

export default MakeAppointment;