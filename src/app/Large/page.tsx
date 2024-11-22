import React from "react";
import Image from 'next/image';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';

const Large=()=>{
    return(
<div className=" flex flex-wrap">
   
<div className="    grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap  m-20 bg-zinc-200 w-208 h-251 pl-14 pt-14  outline-8 border-yellow-500 outline-yellow-500 "><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
font-mono" src={i1} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'><b>New Arrival<br/><br/>$120</b><br/><br/>5%  Discount for first 50
         customers</p><br/></div>
         <div className="  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap   m-20 bg-zinc-200 w-208 h-251 pl-14 pt-14   outline-8 outline-yellow-500"><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
font-mono" src={i2} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'><b>New Arrival<br/><br/>$100</b><br/><br/>5%  Discount for first 50
         customers</p><br/></div>
         <div className="   grid-cols-1 md:grid-cols-2 lg:grid-cols-3flex-wrap  m-20  bg-zinc-200 w-208 h-251 pl-14 pt-14   outline-8 outline-yellow-500"><Image className="  bg-white text-gray-700 text-center border-4  outline-black outline outline-6 p-5 text-3xl
font-mono" src={i3} alt="TESTIMAG"/><p className=' lg-text-[24px] font-sans'><b>New Arrival<br/><br/>$130</b><br/><br/>5%  Discount for first 50
         customers</p><br/></div>
       
        
         </div>
         )
}

export default Large;