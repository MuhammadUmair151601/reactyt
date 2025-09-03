import React from 'react'

const Header = () => {
  return (
    <nav className="w-full bg-orange-500 p-4 flex justify-between text-3xl font-bold">
    <h1>M.umair</h1>
    <div className="flex gap-8 text-2xl font-bold">
      <h4>About Me</h4>
      <h4>Contact Us</h4>
      <h4>Services</h4>
      <h4>Connect</h4>
    </div>
   </nav>
  )
}

export default Header