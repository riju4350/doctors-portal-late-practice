import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment,date,setTreatment}) => {
    const {name,slots} = treatment;
    const handleSubmit = (event) =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
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
   <input type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
   <select name='slot' class="select select-bordered w-full max-w-xs">
    {slots.map(slot=><option value={slot}>{slot}</option>)}
   </select>
   <input name='name' type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
   <input name='email' type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
   <input name='phone' type="number" placeholder="Phone" class="input input-bordered w-full max-w-xs" />
   <input type="submit" value="submit" class="btn btn-secondary text-white font-bold w-full max-w-xs" />
   </form>
    </div>
    </div>
   </div>
  )
}

export default BookingModal;