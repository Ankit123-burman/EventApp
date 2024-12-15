import React from 'react'
import { Link } from 'react-router-dom';


function Notifypage() {
  return (
    <div className='flex justify-center bg-transparent items-center' >
    <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 w-96 rounded-lg shadow-lg">
            <a href="#" class="text-pink-500 text-sm mb-4 block hover:underline"><Link to="/" >Back home</Link></a>
            <h2 class="text-2xl font-semibold text-center mb-6">Fill in the form to get notified of events.</h2>

            <form>
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" placeholder="Abc" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" placeholder="ex@gmail.com" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <div class="mb-6">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" placeholder="+91 8363280208" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>

                <button type="submit" class="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300">Get notified</button>
            </form>
        </div>
        <div class="relative w-1/2 h-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-Tl_c5bc9HW5UtGxOxVrLn4jv0j8dx18cg&s" alt="Event Image" class="object-cover w-full h-full opacity-60" />
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <h3 class="text-white text-2xl font-semibold text-center">Party Like There Is No Tomorrow.</h3>
            </div>
        </div>
    </div>
</div>
  )
}

export default Notifypage