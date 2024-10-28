import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from '../../assets/Image/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
const Header = () => {
  const[touch,settouch] = useState(false);
  const handleOntouch=()=>{
   
    settouch(true);
   
  }
  const handlemouseleave=()=>{
    settouch(false);
   
  }
  return (
    <div>
      <nav className='flex justify-center gap-2 md:gap-0 md:justify-between px-[70px] items-start md:items-center text-sm md:text-lg font-semibold py-7  text-white bg-[#000000]'>
           
           
           <div className="navbar_text flex flex-col md:flex-row items-center gap-6 ">
             
               <Link to='/foods'><img className=' w-[100px]' src={image} alt="" /></Link>
               <Link onMouseEnter={handleOntouch} onMouseLeave={handlemouseleave} to='#'>RACIPES
               <div className={`sublink flex w-[300px] font-normal  flex-col absolute px-5 py-6 bg-black ${touch?'block' : 'hidden'}`}>
                <Link to='/breakfast'>Breakfast & Brunch Recipes</Link>
                <Link to='/lunch'>Lunch Recipes</Link>
                <Link to='/snacks'>Appetizers & Snack Recipes</Link>
                <Link to='/dinner'>Dinner Recipes</Link>
                <Link to='/dessert'>Dessert Recipes</Link>
               </div>
               </Link>
          
               <NavLink to ='/popular'>POPULAR</NavLink>
               <Link to='/meat-and-seafood'>MEAT & SEAFOOD</Link>
               <Link to='/healthy-and-diet'>HEALTHY & DIET</Link>
               <Link to='/holidays'>HOLIDAYS</Link>
               <Link to='/cuisine'>CUISINE</Link>
               <Link to='/seasonal'>SEASONAL</Link>
               
           </div>
           <div className="navbar-icon flex gap-4 text-2xl">
           <Link to='/search'><IoSearchOutline></IoSearchOutline></Link>
           <Link to='/saveracipe'><FiBookmark></FiBookmark></Link>
           <Link to='/login'><RxAvatar></RxAvatar></Link>
           </div>
      </nav>
    </div>
  )
}

export default Header
