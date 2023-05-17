import React from 'react';
import code from '../images/hero.png';
import Button from './Button';

function Hepa() {
  return (
    <section className="text-gray-600 body-font">
      <div
        className="container"
        style={{
          backgroundImage: `url(${code})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className="container cover mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Unleashing the Power of A
            </h1>
            <p className="mb-8 leading-relaxed font-bold text-black text-3xl ">
            "Transforming customer experience with AI-powered chatbots and virtual assistants for seamless interactions and efficient support."
            </p>
            <div className="flex justify-center">
              <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hepa;
