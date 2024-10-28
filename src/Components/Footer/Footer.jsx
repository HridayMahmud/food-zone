import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { CiTwitter } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { RiYoutubeLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <footer className='bg-black py-8 flex flex-col md:flex-row justify-between items-center px-16'>
             <div className="div">
             <div className='link text-white text-xl flex gap-4'>
               <GrFacebookOption></GrFacebookOption>
               <SiInstagram></SiInstagram>
               <FaPinterestP></FaPinterestP>
               <CiTwitter></CiTwitter>
               <RiYoutubeLine></RiYoutubeLine>
               <TfiEmail></TfiEmail>
             </div> <br></br>
             <div className="all flex gap-2 text-white text-xs font-semibold">
                  <p>All Categories</p>
                  <p>Site Map</p>
                  <p>About Us</p>
                  <p>Help</p>
               </div> 
             </div>

             <div className="text text-white text-right md:text-right">
               <p className='text-xs font-semibold'>The Discovery Family Of Networks</p>
               <div className='text-xs'>
               <span> <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle></span>
               <p>2024 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved</p>
               </div><br></br>
               <div className="p-text text-xs ">
                              <a className='mr-2 ' href="">Advertise</a>
                              <a className='mr-2 ' href="">Adchoices</a>
                              <a className='mr-2 ' href="">Privacy Policy</a>
                              <a className='' href="">Vistior Agreement</a></div>
             </div>
      </footer>
    </div>
  )
}

export default Footer
