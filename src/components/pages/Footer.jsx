import React from 'react';
import { social } from '../data/dummydata';
import { WhatsApp } from '@mui/icons-material'; // Import WhatsApp icon from Material-UI

export const Footer = () => {
  

  return (
    <footer className="bg-primaryBackground text-white py-12 h-auto md:h-[35vh] relative">

      
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

        <p className="mt-4 text-center text-sm text-primaryColor" data-aos="">
           Powered By amogosolomon.tech
        </p>
        <p className=" text-center text-sm text-primaryColor" data-aos="">
           (+234 8166617463)
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;



/* import React from 'react';
import { social } from '../data/dummydata';
import { WhatsApp } from '@mui/icons-material'; 

export const Footer = () => {
  const whatsappNumber = '+2347084857763'; 

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <footer className="bg-primaryBackground text-white py-12 h-auto md:h-[35vh] relative">

    
      <button
          className="absolute top-2 right-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          onClick={handleWhatsAppClick}
        >
          <WhatsApp /> 
          How may we help you?
        </button>
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

        <p className="mt-4 text-center text-sm text-primaryColor" data-aos="">
           Powered By Dopetek
        </p>
        <p className=" text-center text-sm text-primaryColor" data-aos="">
           (+234 8166617463)
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
 */


/* import React from 'react';
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

        <p className="mt-4 text-center text-sm text-primaryColor" data-aos="">
           Powered By Dope9 Technologies
        </p>
        <p className="mt-4 text-center text-sm" data-aos="">
           for ICT Services, contact +234 8166617463
        </p>
      </div>
    </footer>
  );
};

+234 708 485 7763 */


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


