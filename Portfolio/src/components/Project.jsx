import React from 'react'
import pro1 from '../assets/proj1.png'
import pro2 from '../assets/project2.png'
import pro3 from '../assets/project3.png'
import pro4 from '../assets/project1.png'

const Project = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id='project'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>
                        My <span>Project</span>
                        </h2>
                        <p className='text-gray-500'>
                       These are my project 
                        </p>
                </div>

            </div>

            <div className='grid grid-cols-2 gap-4 sm:grid-col-3 md:gap-6 xl:gap-8'>

                <a href='/' className='group h-48  overflow-hidden rounded-lg shadow-lg md:h-80 '>
                
                <img src={pro1} loading='lazy' alt='' className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>

                </a>

                <a href='/' className='group h-48  overflow-hidden rounded-lg shadow-lg  md:h-80 '>
                
                <img src={pro4} loading='lazy' alt='' className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>

                </a>

                <a href='/' className='group h-48  overflow-hidden rounded-lg shadow-lg  md:h-80 '>
                
                <img src={pro2} loading='lazy' alt='' className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>

                </a>

                <a href='/' className='group h-48  overflow-hidden rounded-lg shadow-lg md:h-80 '>
                
                <img src={pro3} loading='lazy' alt='' className=' h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>

                </a>

                
            </div>

        </div>
    </div>
  )
}

export default Project