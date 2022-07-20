import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const BookingModal = ({treatment,date,setTreatment}) => {
  const {booking,setBooking} = useState({});
  useEffect(()=>{
    fetch(('http://localhost:5000/bookings'),{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {console.log(data)})
    
  },[]);

  const [user, loading, error] = useAuthState(auth);
  if(loading){
    return <Loading></Loading>
  }
  
  const {name,slots} = treatment;
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(user)
        // const date = event.target.date.value;
        // const slot = event.target.slot.value;
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const phone = event.target.phone.value;
        // const obj = {
        //   date,
        //   time: slot,
        //   name,
        //   email,
        //   phone
        // }
        // setBooking(obj);
        // console.log(obj);
        setTreatment(null)
    }
  return (
   <div>  
    <input type="checkbox" id="service" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
    <label for="service" class="btn btn-sm btn-circle btn-secondary text-white font-bold absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-2xl text-center text-secondary">{name}</h3>
   <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
   <input name='date' type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
   <select name='slot' class="select select-bordered w-full max-w-xs">
    {slots.map(slot=><option value={slot}>{slot}</option>)}
   </select>
   <input name='name' type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
   <input name='email' type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
   <input name='phone' type="number" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
   <input type="submit" value="submit" class="btn btn-secondary text-white font-bold w-full max-w-xs" />
   </form>
    </div>
    </div>
   </div>
  )
}

export default BookingModal;
