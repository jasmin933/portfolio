import React from 'react'
import stackOverflow from '../assets/portfolio/stackoverflow.jpg'
import toDoapp from '../assets/portfolio/todoapp.jpg'
import accountmng from '../assets/portfolio/accountmng.png'
import ecom from '../assets/portfolio/ecom.png'
import portfolio from '../assets/portfolio/portfolio.png'
import portfoliodemo from '../assets/portfoliodemo.mp4'
import app from '../assets/app.mp4'
import account from '../assets/account.mp4'
import stackovrflw from '../assets/stackovrflw.mp4'
import ecomv from '../assets/ecomv.mp4'
const Portfolio = () => {

    const portfolios =[
                       {
                        id:1,
                        src:stackOverflow,
                        href:'https://github.com/jasmin933/stackoverflow-clone',
                        demo: stackovrflw
                       },
                       {
                        id:2,
                        src:portfolio,
                        href:'https://github.com/jasmin933/portfolio',
                        demo: portfoliodemo
                        
                       },
                       {
                        id:3,
                        src:ecom,
                        href:'https://github.com/jasmin933/ecom',
                        demo: ecomv
                       },  
                        {
                        id:4,
                        src:accountmng,
                        href:'https://github.com/jasmin933/accountmanagmentsystem',
                        demo: account
                       },
                       {
                        id:5,
                        src:toDoapp,
                        href:'https://github.com/jasmin933/my-todoapp',
                        demo: app
                       },
    ]

  


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>
             
                    <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                     portfolios.map(({id,src,href,demo})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                        <a href={demo}
                               className='flex justify-between items-center w-full text-white' 
                                 target='_blank'
                                 rel='noreferrer'
                            >
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        </a>

                            <a href={href}
                               className='flex justify-between items-center w-full text-white' 
                                 target='_blank'
                                 rel='noreferrer'
                            >
                           <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> 
                            </a>
                        </div>
                    </div>)
                    )}
                    </div>
            

          
        </div>
    </div>
  )
}

export default Portfolio