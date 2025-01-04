import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

const Button = ({path, message, onClick}) => {
  return (
    <div onClick={onClick} className="z-20 my-5 w-[400px] h-[100px] bg-custom-gradient"> 
      <Link to={path}>
        <p className="text-[70px] text-white text-center font-chakra my-auto"> {message} </p>
      </Link>
    </div>
)
}

export default Button