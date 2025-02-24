import React from 'react'
import { useNavigate } from 'react-router'
import { assets } from '../assets/asset';

export default function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className=' h-screen bg-gradient-to-r from-[#07162B] to-[#08182E] flex justify-center '>
    <div className='mt-2 h-fit pt-2 ml-10  font-[font2]'>
        <h1 className='text-gray-600 text-[5vh] sm:text-3xl'>CodeIQ</h1>

    </div>
    {/* ---------- WRAPPER ---------- */}
    <div className=' w-[90vw] flex items-center md:flex-row flex-col-reverse '>

        {/* ----- LEFT ----- */}
        <div className='w-[50vw] '>
            <h1 className='text-white text-[5vh] sm:text-5xl font-[font1]'>AI-Driven Code</h1>
            <h1 className='text-[#D2D8E4] font-[font1] text-[3vw] sm:text-xl mt-5'>
            Your smart coding companion—deep AI-driven reviews for better, optimized, and cleaner code-all in one click.
            </h1>
            <button onClick ={()=>navigate('/engine')} className='text-white text-sm sm:text-xl bg-gradient-to-r
             from-[#3E92FE] to-[#86b8f9] mt-10 py-2 px-10 rounded-2xl mb-6'>Get Started</button>
        </div>


        {/* ----- RIGHT ----- */}
        <div>
            <img src={assets.language_img} alt="" className='object-cover bg-center size-[50vh]'/>
        </div>
    </div>
        
    </div>
  )
}



