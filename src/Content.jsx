import React from 'react';
import chat from './images/chat.jpg';
import va from './images/va.png';
import impro from './images/impro.jpg';
import search from './images/search.png';
import { Link } from 'react-scroll';

const Content = () => {
  return (
    <section className="w-full text-gray-400 body-font bg-indigo-200 rounded justify-center" id='services'>
      <div className="md:container px-5 py-24 mx-auto items-center justify-center">
          <div className="w-full mb-10 md:1/2  items-center justify-center flex">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-900 justify-center items-center">
              Our Products
            </h1>
          </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-10 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={chat}
                  alt="content"
                />
                <h1 className="text-lg text-center text-gray-800 font-bold title-font mb-4 py-2 px-4">
                  AI Chat Bots
                </h1>
                <p className="leading-relaxed text-base  text-center text-gray-600">
                  "Our Efficient chatbots streamline customer interactions."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-10 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={va}
                  alt="content"
                />
                <h1 className="sm:items-center text-lg text-center text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  AI Virtual Assistants
                </h1>
                <p className="leading-relaxed text-base text-center text-gray-600">
                  "Need someone to talk to, <br /> Our Virtual assistants enhance productivity seamlessly."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-10 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={impro}
                  alt="content"
                />
                <h2 className="text-lg text-center text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  Image Processing AI
                </h2>
                <p className="leading-relaxed text-center text-base text-gray-600">
                  "Our AI transforms image processing capabilities."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-10 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={search}
                  alt="content"
                />
                <h2 className="text-lg text-center text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  AI Search Engines
                </h2>
                <p className="leading-relaxed text-base text-center text-gray-600">
                  "Our AI search engines revolutionize information retrieval."
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
