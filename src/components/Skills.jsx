import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import talwind from '../assets/tailwind.png'





const Skills = () => {
  return (
    <div id='skills' className='border border-white text-gray-400 md:h-[150px] max-w-[1100px] mb-5 mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center mt-10'>

        <h2 className='text-white text-2xl md:text-4xl font-bold m-4'>
            My<br/><span>Tech</span>Tech<br/><span>Stack</span>
        </h2>

     <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt=''/>
        <p className='mt-2'>HTML</p>

     </div>

     
     <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt=''/>
        <p className='mt-2'>CSS</p>

     </div>

     
     <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={js} alt=''/>
        <p className='mt-2'>JS</p>
     </div>

     
     <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt=''/>
        <p className='mt-2'>REACT</p>

     </div>

     
     <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={talwind} alt=''/>
        <p className='mt-2'>TAILWIND</p>

     </div>
    </div>
  )
}

export default Skills