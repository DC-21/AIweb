import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'About', link: '/' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md w-full top-0 left-0 sticky z-50">
      <div className="md:flex items-center justify-between bg-white py-4 rounded">
        <div className="flex items-center">
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
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center ml-4`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl px-2 py-1" // Added padding here
            >
              <a
                href={link.link}
                className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
