import React, { useState } from 'react';
import { contact } from '../data/dummydata'; // Adjust path as needed

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation here if needed
    
    // Display a success message or set a flag for showing a message
    setSubmitted(true);

    // Optionally, you can send the form data using fetch or any other method here
    // Example using fetch:
    // fetch('https://getform.io/f/4ace48dd-fde9-46cd-9332-04f549394b81', {
    //   method: 'POST',
    //   body: new FormData(event.target)
    // })
    // .then(response => {
    //   // Handle the response if needed
    // })
    // .catch(error => {
    //   // Handle errors if any
    // });
  };

  const handleReset = () => {
    setSubmitted(false); // Reset the submitted state to false
  };

  return (
    <>
      <section className='md:h-[89vh] h-auto w-full my-auto bg-secondaryBackground mt-1'>
        <div className='container mx-auto p-8 max-w-[90%] '>
          <div className="text-3xl text-primaryColor font-bold text-center py-6 m-auto">Contact Us</div>
          <div className='content flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-[70%]' data-aos='flip-left'>
              {!submitted ? (
                <form action="https://getform.io/f/4ace48dd-fde9-46cd-9332-04f549394b81" method="POST" onSubmit={handleSubmit}>
                  {/* Form fields */}
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
                    cols='30'
                    rows='10'
                    className='w-full p-2 rounded-lg'
                    data-aos=''
                  ></textarea>
                  <button
                    type='submit'
                    className='w-full bg-primaryColor text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
                    data-aos=''
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <div className="text-center text-xl bg-primaryBackground">
                  <p className='text-primaryColor text-xl p-4 rounded-2'>Message Sent, Thank you!</p>
                  <button onClick={handleReset} className="text-primaryColor underline focus:outline-none">
                    Close 
                  </button>
                  {/* Optionally reset the form or show additional content */}
                </div>
              )}
            </div>


            {/* Remaining content */}
            {/* ... */}
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





/* import React from 'react';
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
              
              <form action="https://getform.io/f/4ace48dd-fde9-46cd-9332-04f549394b81" method="POST">
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
 */



/* In this code, I've used various Tailwind CSS classes to style the form and make it responsive. The lg: prefix is used to apply styles only on large screens (viewport width 1024px and above). You may adjust the responsive classes based on your specific design requirements.
 */