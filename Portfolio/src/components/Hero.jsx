import React from 'react'
import profilepic from'../assets/file.png'
import {AiFillLinkedin,AiFillGithub,AiFillInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
  return (
    <div id='home' className='mt-0' >

        <div className=' my-7 sm:my-0 max-w-[1100px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>

        <div className=' flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi I am Govind Kumar Gupta</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
             sequence={[
               "FullStack",
               1000,
               "webdeveloper",
               1000,
             ]
             }
             wrapper='span'
             speed={50}
             repeat={Infinity}
             />
          </h1>
          <div className='flex r items-center'>
              <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>MCA,NIT Raipur</p>
          </div>
          <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
            <AiFillLinkedin/>
            <AiFillGithub/>
            <AiFillInstagram/>
          </div>

          <div class="relative inline-flex group my-3">
            <div className=' absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
            from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-insert-1 group-hover:duration-200 animate-title'>
             </div>
             <a href="/" title='Download CV' role='button'
             className='w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-offset-2 focus:ring-gray-900'>
                Download CV
             </a>
          </div>
</div>

<div className=' mx-auto mb-32'>
    <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profilepic} alt="profile pic"/>

</div>
        </div>
       
    </div>
  )
}

export default Hero