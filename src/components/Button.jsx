import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-blue-800 text-white font-bold py-2 px-6 rounded md:ml-8 hover:bg-blue-500 duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
