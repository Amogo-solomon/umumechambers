import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navlink } from '../data/dummydata';
import { social } from '../data/dummydata';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../data/images/logo.png';
import { Top } from '../pages/Top';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-primaryBackground max-w-[100%] mx-auto">
      <Top />
      <div className="flex flex-wrap justify-between items-center max-w-[90%] mx-auto px-4 text-lg text-secondaryBackground rounded-lg md:bg-white py-2 my-2 bg-transparent">
        <ul className="hidden md:flex space-x-8 font-semibold">
          {navlink.map((links) => (
            <li key={links.id}>
              <Link to={links.url} data-aos=" " className="h-primaryColor">
                {links.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex space-x-4">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i data-aos="zoom-in-left">{item.icon}</i>
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden ml-auto text-white">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={`md:hidden fixed left-0 top-0 w-[60%] h-full md:w-1/2 border-r text-silver border-gray-900 bg-headingColor ease-in-out duration-500 ${
            nav ? '' : 'left-[-100%]'
          }`}
        >
          <h1 className="my-2 p-4 w-full text-3xl font-bold text-greyDark ml-4">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </h1>
          <ul className="uppercase p-4">
            {navlink.map((links) => (
              <li className="p-4 my-2 border-gray-600" key={links.id}>
                <Link to={links.url} data-aos="zoom-in-left"
                onClick={() => setNav(false)} // Add this onClick handler
                >
                  {links.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



/* import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navlink } from '../data/dummydata';
import { social } from '../data/dummydata';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../data/images/logo.png';
import { Top } from '../pages/Top';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-primaryBackground max-w-[100%] mx-auto ">
      <Top /> 
      <div className="flex flex-wrap justify-between items-center max-w-[90%] mx-auto px-4 text-lg text-secondaryBackground rounded-lg md:bg-white py-2 my-2 bg-transparent ">
        <ul className="hidden md:flex space-x-8 font-semibold ">
          {navlink.map((links, i) => (       
            <li key={i}>     
              <Link to={links.url} data-aos=" " className='h-primaryColor'>
                {links.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex space-x-4">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <i data-aos="zoom-in-left">{item.icon}</i>
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden ml-auto text-white">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={`md:hidden fixed left-0 top-0 w-[60%] h-full md:w-1/2 border-r text-silver border-gray-900 bg-headingColor ease-in-out duration-500 ${
            nav ? '' : 'left-[-100%]'
          }`}
        >
          <h1 className=" my-2 p-4 w-full text-3xl font-bold text-greyDark ml-4">  
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </h1>
          <ul className="uppercase p-4">
            {navlink.map((links, j) => (
              <li className="p-4 my-2 border-gray-600" key={j}>
                <Link to={links.url} data-aos="zoom-in-left">
                  {links.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}; */

/* Here are the changes made to make the Navbar responsive:

flex-wrap: This class is added to the parent div to allow the content to wrap onto the next line when the screen size is reduced. This ensures that your content doesn't overflow the screen on smaller devices.

w-full and md:w-1/2: These classes are used to control the width of the mobile menu. On smaller screens (md:hidden), it takes the full width, and on medium screens and above (md:w-1/2), it takes half of the width.

By applying these responsive classes, your Navbar should adapt well to various screen sizes. Make sure you test it on different devices and screen sizes to ensure it works as expected. */



