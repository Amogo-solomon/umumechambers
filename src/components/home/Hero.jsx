import React from 'react';
import { home, herobase } from '../data/dummydata';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[85vh] relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex flex-col max-w-[90%] mx-auto bottom-28">
          <div className="text-center text-silver mt-7 md:7xl md:bottom-10">
            {home.map((val, index) => (
              <div key={index}>
                <h1 className="font-semibold text-4xl text-primaryColor md:text-7xl m-auto py-4 text-center mt-5 bottom-5">
                  <Typewriter
                    options={{
                      strings: [val.text, val.text1, val.text2, val.text3],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className=' md:visible hidden ' data-aos="fade-left md:text-4xl m-auto text-silver text-sm ">
                  {val.desc}
                </p>
              </div>
   ) )}
          </div>
        </div>
      </div>
       {/* content for the base of the hero page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-silver p-4 absolute bottom-0 bg-secondaryBackground text-sm mx-auto w-full">
        {herobase.map((item, desc) => (
          <div className="text-center" data-aos="" key={desc}>
            <i className='text-primaryColor'>{item.icon}</i>
            <h3 className='font-semibold text-primaryColor'>{item.title}</h3>
           {/*  <p className=''>{item.desc}</p> */}
           <p className='pt-2 font-bold'>{item.desc1}</p> 

            
            
          </div>
        ))}
      </div>
    </section>
  );
};







/* import React from 'react';
import { home, herobase } from '../data/dummydata';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[85vh] relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex flex-col   max-w-[90%] my-10 mx-auto bottom-28 ">
          <div className="text-center text-silver mt-7"> 
            {home.map((val, index) => (
              <div key={index}>
                <h1 className="font-semibold text-4xl text-primaryColor md:text-7xl m-auto py-4 text-center mt-5 bottom-5">
                  <Typewriter
                    options={{
                      strings: [val.text1, val.text2, val.text3],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p data-aos="fade-left md:text-4xl m-auto text-silver text-6xl">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-silver p-4 absolute bottom-0 bg-primaryBackground text-sm mx-auto top-50">
        {herobase.map((item, desc) => (
          <div className="text-center" data-aos="" key={desc}>
            <i className='text-primaryColor'>{item.icon}</i>
            <h3 className='font-semibold'>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    </section>
  );
};
 */



/* import React from 'react';
import { home, herobase } from '../data/dummydata';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[85vh] relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center max-w-[90%] mx-auto">
          <div className="text-center text-silver mt-7"> 
            {home.map((val, index) => (
              <div key={index}>
                <h1 className="font-semibold text-4xl text-primaryColor md:text-7xl m-auto py-4 text-center">
                  <Typewriter
                    options={{
                      strings: [val.text1, val.text2, val.text3],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p data-aos="fade-left md:text-4xl m-auto text-silver text-6xl">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-silver p-4 absolute bottom-0 bg-primaryBackground text-sm mx-auto">
        {herobase.map((item, desc) => (
          <div className="text-center" data-aos="flip-left" key={desc}>
            <i className='text-primaryColor'>{item.icon}</i>
            <h3 className='font-semibold'>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
 */




/* import React from 'react';
import { home, herobase } from '../data/dummydata';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[85vh] relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center max-w-[90%] mx-auto">
          <div className="text-center text-silver">
            {home.map((val, index) => (
              <div key={index}>
                <h1 className="font-semibold text-4xl text-primaryColor md:text-7xl m-auto py-4 text-center">
                  <Typewriter
                    options={{
                      strings: [val.text1, val.text2, val.text3],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p data-aos="fade-left md:text-4xl m-auto text-silver text-6xl">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-silver p-4 absolute bottom-0 max-w-[90%] mx-auto bg-primaryBackground">
        {herobase.map((item, desc) => (
          <div className="text-center" data-aos="flip-left" key={desc}>
            <i>{item.icon}</i>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

 */


/*  import React from 'react';
import { home } from '../data/dummydata';
import  Typewriter  from 'typewriter-effect';
import { herobase } from '../data/dummydata';


export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[85vh] relative">
    
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center max-w-[90%] mx-auto">
          <div className="text-center text-silver">
            {home.map((val, index) => (
              <div key={index}>
                <h1 className='font-semibold text-4xl text-primaryColor md:text-7xl m-auto py-4 text-center'>
                <Typewriter
                 options={{ strings: [`${val.text1}`, `${val.text2}`, `${val.text3}`], // Remove backticks
                    autoStart: true,
                    loop: true,
                     }}
                    />
                </h1>
                    <p data-aos='fade-left md:text-4xl m-auto text-silver text-6xl'>{val.desc}</p>
              
              </div>
            ))}
          </div>

          <div>
          {herobase.map((item, desc) => (
            <div className='' data-aos='flip-left' key={desc}>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
          ))}       
    </div>
        </div>
        
      

      </div>
    </section>
  );
};  */







/* import React from 'react';
import { home } from '../data/dummydata';

export const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen relative">
    
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/home-bg1.png)' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            {home.map((val, index) => (
              <div key={index}>
                <h3 className="text-3xl font-semibold">{val.text}</h3>
                <h1 className="text-6xl font-bold">{val.name}</h1>
                <p className="text-lg">{val.desc}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4">
                  Download Resume abo
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; */
