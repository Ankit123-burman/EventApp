import React from 'react'
import Lable from '../Lable/Lable'
import Card from '../Card/Card'

function HeroSection() {
  return (
    <>
    <section className=" bg-darkPurple2 flex items-center justify-between px-8 py-20">
    <div className="max-w-lg">
      <h1 className="text-5xl text-white font-extrabold leading-snug">Experience More</h1>
      <h2 className="text-4xl text-white  font-bold mt-4">The Cheapest tickets on the internet, period.</h2>
      <p className="mt-4 text-gray-300">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic, or web designs.
      </p>
    </div>
    <div className="flex justify-center w-[70%]">
  <div className="w-full">
    <iframe data-aos="fade-up"
      className="w-full h-[300px]" 
      src="https://giphy.com/embed/8cHalzSlhCXRt1j2VE"
      allowFullScreen
    ></iframe>
    </div>
    </div>
  </section>
  <Lable/>
  <Card/>
  </>
  )
}

export default HeroSection




