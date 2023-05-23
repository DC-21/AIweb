import React from 'react';
import Button from './Button';
import { Player } from '@lottiefiles/react-lottie-player';
import { TypeAnimation } from 'react-type-animation'

function Hero() {

  return (
    <section className="text-gray-600 body-font" id='home'>
      <div className="container cover mx-auto flex flex-wrap px-5 py-24 items-center justify-center">
        <div className="text-center lg:w-2/3 w-full">
        <TypeAnimation
    sequence={[
      'Unleashing the Power of AI',
      2000,
      'Exploiting the Power of AI',
      2000,
      'Unlocking the Power of AI',
      2000
    ]} 
    className='text-blue-900 font-bold text-4xl mb-8'
    repeat={Infinity}
    wrapper='span'

  />
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
            className="z-10 hover:-translate-y-4 transition-all ease-in-out duration-300 cursor-pointer"
          />
          <p className="mb-8 leading-relaxed font-bold text-blue-900 text-2xl pb-2">
            Transforming customer experience with AI-powered chatbots and virtual assistants for seamless interactions and efficient support.
          </p>
          <div className="flex justify-center">
            <Button className="inline-flex text-white bg-indigo-500 border-0 py-2 pt-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
