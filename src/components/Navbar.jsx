import React from 'react';
import Button from './Button';

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

const handleAbout = () => {
  const about = document.getElementById('about');
  if (about) {
    // Will scroll smoothly to the top of the next section
    about.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  return (
    <div className="shadow-md w-full top-0 left-0 sticky z-50">
      <div className="md:flex items-center justify-center bg-white py-4 rounded">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-indigo-900 container bg--200 py-2 p-4">
          <span className="text-2xl text-black-600 mr-1 pt-2">
            <ion-icon name="play-circle-outline"></ion-icon>
          </span>
          DiCE
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-white-900 border-b-2 border-indigo-400 py-2 px-4 mr-2 text-black-400 focus:outline-none"
          />
        </div>
        <ul className="md:flex md:items-center ml-4">
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
  );
};

export default Navbar;
