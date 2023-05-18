import React from 'react';
import chat from './images/chat.jpg';
import va from './images/va.png';
import imagepro from './images/imagepro.jpg';
import search from './images/search.png';

const Content = () => {
  return (
    <section className="text-gray-400 body-font bg-indigo-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black justify-center">
              Our Products
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg w-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={chat}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Chat Bots
              </h2>
              <p className="leading-relaxed text-base">
                "Our Efficient chatbots streamline customer interactions."
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg w-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={va}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Virtual Assistants
              </h2>
              <p className="leading-relaxed text-base">
                "Need someone to talk to, <br /> Our Virtual assistants enhance productivity seamlessly."
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg w-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={imagepro}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Image Processing
              </h2>
              <p className="leading-relaxed text-base">
                "Our AI transforms image processing capabilities."
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 flex hover:-translate-y-10 transition-all duration-500 ease-in-out">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg w-full">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={search}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Search Engines
              </h2>
              <p className="leading-relaxed text-base">
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
