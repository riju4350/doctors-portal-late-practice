import React from 'react';
import appointment from "../../assets/images/appointment.png"

const Contact = () => {
  return (
    <div className='flex flex-col bg-secondary justify-center items-center py-24' style={{background:`url${appointment}`}}>
       <form>
       <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
        <input type="email" placeholder="Type here" class="input w-full max-w-xs py-5 my-5" />
        <input type="text-area" placeholder="Type here" class="input w-full max-w-xs h-48 " />
       </form>
    </div>
  )
}

export default Contact;