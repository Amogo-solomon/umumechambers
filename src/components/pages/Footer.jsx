import React from 'react';
import { social } from '../data/dummydata';

export const Footer = () => {
  return (
    <footer className="bg-primaryBackground text-white py-12 h-auto md:h-[35vh] ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          {social.map((item2) => (
            <a href={item2.url} target="_blank" rel="noopener noreferrer" key={item2.id}>
              <i className="text-2xl text-primaryColor" data-aos="">
                {item2.icon}
              </i>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-sm" data-aos="">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};



/* import React from 'react';
import { social } from '../data/dummydata';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          {social.map((item2) => (
            <a href={item2.url} target="_blank" rel="noopener noreferrer" key={item2.id}>
              <i className="text-2xl" data-aos="zoom-in-left">
                {item2.icon}
              </i>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-sm" data-aos="zoom-in-right">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
 */



/* import React from 'react';
import { social } from '../data/dummydata';

export const Footer = () => {
  return (
    <>
      <footer className='height-auto bg-secondaryBackground p-40 '>
        {social.map((item2) => (
          <a href={item2.url} target="_blank" rel="noopener noreferrer" key={item2.id}>
            <i data-aos='zoom-in-left' className='text-primaryColor p-2'>{item2.icon}</i>
          </a>
        ))}
        <p data-aos='zoom-in-right' className='text-silver'>All Rights Reserved 2023</p>
      </footer>
    </>
  );
};
*/


