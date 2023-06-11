import React from 'react';
import dice from '../images/dice.png' 
import { HiMenu } from 'react-icons/hi';

const handleHome = () => {
  const home = document.getElementById('home');
  if (home) {
    // Will scroll smoothly to the top of the next section
    home.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleBlog = () => {
  const blog = document.getElementById('blog');
  if (blog) {
    // Will scroll smoothly to the top of the next section
    blog.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleServices = () => {
  const services = document.getElementById('services'); // Corrected the element ID
  if (services) {
    // Will scroll smoothly to the top of the next section
    services.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleContact = () => {
  const about = document.getElementById('contact');
  if (about) {
    // Will scroll smoothly to the top of the next section
    about.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <div className="shadow-md w-full rounded-md top-0 left-0 sticky z-50">
      <div className="md:flex flex-row w-full sm:flex items-center justify-between bg-white py-4 rounded">
        <div className="font-bold text-2xl flex w-full cursor-pointer flex-row justify-between items-center text-indigo-900 bg--200 py-2 p-4">
            <img src={dice} alt="Logo" className=" h-15 rounded-lg md:h-15 w-16 md:w-20 object-contain hover:animate-pulse"/>
            <div className="md:hidden block">
            <HiMenu size={24} />
          </div>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="bg-white-900 border-b-2 border-indigo-400 md:block hidden py-2 px-4 mr-2 text-black-400 focus:outline-none"
          />
        </div>
        <div className="md:items-center jml-4 md:flex hidden ">
          <ul className="md:flex hidden">
          <li className="md:ml-8 text-xl px-2 py-1">
            <a
              onClick={handleHome}
              className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
            >
              Home
            </a>
            <a
              onClick={handleBlog}
              className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
            >
              Blog
            </a>
            <a
              onClick={handleServices}
              className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
            >
              Services
            </a>
            <a
              onClick={handleContact}
              className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
            >
              Contact
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
