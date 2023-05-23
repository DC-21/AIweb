import React from 'react';
import ai from './images/aii.png';
import girl from './images/girl.png';
import make from './images/gpt.png';
import hom from './images/aii.jpg';
import mac from './images/mac.png';
import art from './images/art.jpg';
import { Link } from 'react-scroll';

function Blog() {
  return (
    <section className="text-gray-600 body-font cursor-pointer">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={ai} />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={girl} />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={hom} />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={make} />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={art} />
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
            <img alt="gallery" className="w-full h-full object-cover object-center rounded" src={mac} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
