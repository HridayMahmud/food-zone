import React from 'react'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import Ditaileditem from '../DisplayDetailedItem/Ditaileditem';



const Breakfast = () => {
               const data2 = useLoaderData();
            
  return (
    <div>
      <div className='breakfast '></div>
     <div className='px-16 mt-10'>
        <h1 className='text-5xl mb-7 uppercase font-semibold text-[#2f2f2f]'>Breakfast & Brunch Recipes</h1>
        <p className="text-lg font-normal">No morning is complete without a good meal, and we have all the wake up-worthy breakfast recipes<br></br> to start your day off right.</p>
      </div> 

      <div className='px-16 py-16 relative'>
      <div className="second_image px-16 py-6 ">
      <div className="text-button absolute top-1/3">
       <h1 className=' uppercase mb-4 text-5xl font-bold text-[#ffffff]'>42 Quick & Easy Fall<br></br> Dinners</h1>
       <button className='px-5 py-3 rounded-md text-gray-700 bg-[#f5ce35]' type="button">SEE THEM ALL</button>
       </div> 
      </div>
      </div>

    
      <div className='px-16'>
      <h1 className="text-2xl  font-normal ">THE CLASSICS</h1>
      <div className='grid  grid-cols-1 md:grid-cols-3 gap-3 '>
      {
       data2.map(eachdata=><div key={eachdata.id} className='relative each-data shadow-md shadow-gray-400 rounded-lg '>
       
     <img className='w-[450px] p-10 h-[450px] ' src={eachdata.recipe_img} alt="" />
  
    <Link to='/detail'><h1  className='text-2xl text-white absolute bottom-16 left-16  font-bold '> {eachdata.recipe_name}</h1></Link>
    
    </div>)
      }
      </div>
      </div>
  
    </div>
  
  )
}

export default Breakfast
