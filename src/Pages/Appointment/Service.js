import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name,slots} = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
    <div class="card-body">
    <h2 className="text-2xl text-secondary font-bold">{name}</h2>
    <p>
        {slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span>}
    </p>
    <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
    <div class="card-actions justify-center">
    <label for="service" onClick={()=>{setTreatment(service)}} disabled={slots.length === 0} class="btn btn-secondary text-white font-bold" >Book Appointment</label>
    </div>
  </div>
</div>
  )
}

export default Service;