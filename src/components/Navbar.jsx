import React from 'react'

const Navbar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-900">
            <span className="text-2xl text-black-600 mr-1 pt-2"><ion-icon name="diamond-outline"></ion-icon></span>
        DiCE
        </div>
      </div>
    </div>
  )
}

export default Navbar
