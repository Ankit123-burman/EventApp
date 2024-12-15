import React from 'react'

function Lable() {
  return (
    <section class="bg-black text-white p-8 ">
    <div class="flex justify-between items-center">
      <div>
        <label class="block font-semibold">Location</label>
        <input
          type="text"
          placeholder="Search location"
          class="bg-gray-800 text-white p-2 rounded mt-2 w-full"
        />
      </div>
      <div>
        <label class="block font-semibold">Date</label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          class="bg-gray-800 text-white p-2 rounded mt-2 w-full"
        />
      </div>
      <div>
        <label class="block font-semibold">Price</label>
        <select class="bg-gray-800 text-white p-2 rounded mt-2 w-full">
          <option>All Trype</option>
          <option>Free</option>
          <option>0-500</option>
          <option>500-1000</option>
        </select>
      </div>
      <div>
        <label class="block font-semibold">Events</label>
        <select class="bg-gray-800  text-white p-2 rounded mt-2 w-full">
          <option className='hover:bg-pink-500' >Music</option>
          <option className='hover:bg-pink-500' >Tech</option>
          <option className='hover:bg-pink-500' >Dating</option>
          <option className='hover:bg-pink-500' >NightLife</option>
          <option className='hover:bg-pink-500' >Business</option>
        </select>
      </div>
      <button class="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 mt-4">
        Find Events
      </button>
    </div>
  </section>
  )
}

export default Lable