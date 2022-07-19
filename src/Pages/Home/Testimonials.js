import React from 'react';
import Person1 from '../../assets/images/people1.png';
import Person2 from '../../assets/images/people2.png';
import Person3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "James Stark",
            img: Person1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        },
        {
            _id: 2,
            name: "Ema Wattson",
            img: Person2,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        },
        {
            _id: 3,
            name: "Ema Stone",
            img: Person3,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            country: "USA"

        }
]
  return (
    <div className='mt-12'>
    <div className='flex justify-between'>
    <div>
    <h1 className='text-xl font-bold text-primary'>Testimonial</h1>
    <p className='text-3xl'>What Our Patients Says</p>
    </div>
    <div>
        <img src={quote} className='w-24 lg:w-48' alt=''/>
    </div>
    </div>      
    <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviews.map(review=> <Testimonial key={review._id} review={review}></Testimonial> )}
    </div>
    
    </div>
  )
}

export default Testimonials;