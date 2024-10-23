import React from 'react'
import { Link } from 'react-router-dom';

const DisplayEachData = ({eachdata}) => {
               const{recipe_name, recipe_img, recipe_title} = eachdata;
               console.log(recipe_img);
  return (
    <div className='relative each-data  w-[550px]  h-[550px] rounded-lg '>
     <img className='w-[450px] p-10 h-[450px] ' src={recipe_img} alt="" />
  
      <Link><h1  className='text-2xl text-white absolute bottom-40 left-16  font-bold '> {recipe_name}</h1></Link>
    </div>
  )
}

export default DisplayEachData
