import React from 'react'
import { about } from '../data/dummydata'
import { Heading }from '../common/Heading'
import { Beforeabout } from './Beforeabout'
import { Attorneys } from './Attorneys'
import { Footer } from './Footer'


export const About = () => {
  return (
    <>
    <Heading className ='font-bold text-4xl' title=""/>
    <Beforeabout />   
        <section className='bg-secondaryBackground w-full text-silver top-2'>
            <div className='w-full mx-auto'>
                <div  className='w-[85%] m-auto grid grid-cols-1 gap-4 '>
                    {about.map((item, desc) => (
                        <div className='bg-headingColor p-4 rounded-lg mb-2 mt-2' data-aos='' key={desc}>
                            <i className='text-primaryColor'>{item.icon}</i>
                            <h3 className='font-semibold p-4 text-primaryColor'>{item.title}</h3>
                            <p className=' md:text-lg text-sm'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Attorneys /> 

    </>
    

  )
}

