import React from 'react';
import Button from './Button';
import { Player } from '@lottiefiles/react-lottie-player';

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container cover mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Unleashing the Power of AI
          </h1>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ width: '600px', height: '300px' }}
            className="-z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
          <p className="mb-8 leading-relaxed font-bold text-black text-2xl">
            "Transforming customer experience with AI-powered chatbots and virtual assistants for seamless interactions and efficient support."
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
