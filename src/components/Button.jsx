import React from 'react'

const Button = (props) => {
  return (
    <button className="font-bold rounded-md py-3 px-2">
      {props.children}
    </button>
  )
}

export default Button
