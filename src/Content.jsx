import React from 'react';
import chat from './images/chat.jpg';
import va from './images/va.png';
import imagepro from './images/imagepro.jpg';
import search from './images/search.png';
import { Link } from 'react-scroll';

const Content = () => {
  return (
    <section className="text-gray-400 body-font bg-indigo-200 rounded justify-center" id='services'>
      <div className="container px-5 py-24 mx-auto items-center justify-center">
        <div className="flex flex-wrap w-full mb-20 items-center justify-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 items-center justify-center">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-blue-900 justify-center">
              Our Products
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={chat}
                  alt="content"
                />
                <h1 className="text-lg  text-gray-600 font-bold title-font mb-4 py-2 px-4 ">
                  AI Chat Bots
                </h1>
                <p className="leading-relaxed text-base   text-gray-600">
                  "Our Efficient chatbots streamline customer interactions."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={va}
                  alt="content"
                />
                <h1 className="text-lg  text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  AI Virtual Assistants
                </h1>
                <p className="leading-relaxed text-base   text-gray-600">
                  "Need someone to talk to, <br /> Our Virtual assistants enhance productivity seamlessly."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={imagepro}
                  alt="content"
                />
                <h2 className="text-lg  text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  Image Processing AI
                </h2>
                <p className="leading-relaxed text-base text-gray-600">
                  "Our AI transforms image processing capabilities."
                </p>
              </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="bg-white bg-opacity-40 p-6 rounded-lg w-full">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={search}
                  alt="content"
                />
                <h2 className="text-lg text-gray-800 font-bold title-font mb-4 py-2 px-4 ">
                  AI Search Engines
                </h2>
                <p className="leading-relaxed text-base  text-gray-600">
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
