import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-800 text-gray-300 py-6">
  <div class="container mx-auto px-4 text-center">
    
    <div class="flex justify-center space-x-6 mb-4">
      <a href="#" class="hover:text-white">Home</a>
      <a href="#" class="hover:text-white">About</a>
      <a href="#" class="hover:text-white">Services</a>
      <a href="#" class="hover:text-white">Contact</a>
    </div>

   
    <div class="flex justify-center space-x-4 mb-4">
      <a href="#" class="text-gray-400 hover:text-white">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="text-gray-400 hover:text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>

   
    <p class="text-sm">
      © 2024 Your Website Name. All rights reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer