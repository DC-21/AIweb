import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-blue text-blue font-old py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500'>
      {props.children}
    </button>
  );
};

export default Button;
