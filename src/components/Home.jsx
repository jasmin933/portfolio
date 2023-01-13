import React from 'react'

import DevImage  from '../assets/devImage.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
              <h2 className='text-4xl sm:text-7xl font-bold text-white '> I'm a Full Stack Developer</h2>
              <p className='text-gray-500 py-4 max-w-md'>
              I am looking for a entry-level position to start my career as a Fullstack Developer.
              I wish to work in a dynamic organisation that will contribute to my professional and 
              personal growth while i contribute to the growth of the company as well as engage in opportunities to further the company’s goal.

              </p>
                 <div>
                  <Link  to="portfolio" offset={-115} smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight  size={25} className='ml-1'/>
                    </span>
                  </Link>
                 </div>
            </div>
            <div className='flex'>
              <img src={DevImage} alt="my profile" className='  rounded-2xl h-80 w-50 mx-auto  md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home