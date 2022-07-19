import React from 'react'
import chair from "../../assets/images/chair.png"
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn'

export default function Banner() {
  return (
    <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryBtn>Get Started</PrimaryBtn>
    </div>
  </div>
</div>
  )
}
