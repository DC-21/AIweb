import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Cta = () => {
  return (
    <section className="text-gray-400 bg-white body-font h-screen justify-center w-full flex items-center">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <TypeAnimation
    sequence={[
      'Unleashing the Power of AI',
      2000,
      'Exploiting the Power of AI',
      2000,
      'Unlocking the Power of AI',
      2000
    ]} 
    className='text-blue-800 font-bold text-4xl mb-8'
    repeat={Infinity}
    wrapper='span'
  />
          <p className="text-2xl text-blue-900 leading-relaxed mt-4">Subscribe to Our Newsletter and Stay Ahead of the Intelligent Revolution</p>
        </div>
        <div className="lg:w-1/3 md:w-1/2 mr-16 bg-indigo-300 bg-opacity-50 justify-center rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-blue-800 text-xl title-font mb-5 font-bold">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-blue-600 font-bold">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full focus:bg-ring-2 focus:ring-indigo- rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-600 font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full focus:bg-ring-2 focus:ring-indigo- rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 " />
          </div>
          <button className="text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none font-bold hover:bg-indigo-600 rounded text-lg">Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
