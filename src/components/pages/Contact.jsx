import React from 'react';
import { Heading } from '../common/Heading';
import { contact } from '../data/dummydata';
import { Footer } from './Footer'

export const Contact = () => {
  return (
    <>
      <section className='md:h-[89vh] h-auto w-full my-auto bg-secondaryBackground mt-1'>
        <div className='container mx-auto p-8 max-w-[90%] '>
          <div className="text-3xl text-primaryColor font-bold text-center py-6 m-auto" >Contact Us</div>
          <div className='content flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-[70%]' data-aos='flip-left'>
              <form action="https://getform.io/f/bdf08e2d-8041-4014-84bb-290c6e2c8f9d" method="POST">
                <div className='flex flex-col lg:flex-row lg:space-x-4'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='w-full lg:w-1/2 p-2 mb-2 lg:mb-0 rounded-lg'
                    data-aos=''
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='w-full lg:w-1/2 p-2 rounded-lg'
                    data-aos=''
                  />
                </div>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  className='w-full p-2 mb-2 mt-2 rounded-lg'
                  data-aos=''
                />
                <textarea
                  name='message'
                  id=''
                  cols='30'
                  rows='10'
                  className='w-full p-2 rounded-lg'
                  data-aos=''
                ></textarea>
                <button
                  type='submit'
                  className='w-full bg-primaryColor 500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
                  data-aos=''
                >
                  Submit
                </button>
              </form>
            </div>
            <div className='lg-w-[30%] lg:pl-8 text-silver' data-aos ='zoom-in-down'>
              {contact.map((item, index) => (
                <div className='box mb-4' data-aos='' key={index}>
                  <i className='text-sm md:text-2xl text-primaryColor'>{item.icon}</i>
                  <p className='text-sm md:text-lg'>
                    <a href={`tel:${item.text1}`}>
                        {item.text1}
                    </a>
                  </p>

                  <p className='text-sm  md:text-lg'>
                    <a href={`mailto:${item.text2}`}>
                        {item.text2}
                    </a>
                    </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};




/* In this code, I've used various Tailwind CSS classes to style the form and make it responsive. The lg: prefix is used to apply styles only on large screens (viewport width 1024px and above). You may adjust the responsive classes based on your specific design requirements.
 */