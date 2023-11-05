import React from 'react'
import { Heading } from "../common/Heading"
import { contact } from '../data/dummydata'


export const Contact = () => {
  return (
    <>
      <section className='contact w-full height-auto bg-primaryBackground'>
        <div className='container'>
            <Heading title='Keep In Touch' />
            <div className='content flexsb'>
                <div className='left p-20'>
                    <form action="https://getform.io/f/bdf08e2d-8041-4014-84bb-290c6e2c8f9d" method="POST">
                        <div className='flex'>
                            <input type="name" name='name' placeholder='Name' data-aos="zoom-in-down" />
                            <input type='email' name='email' placeholder='Email' data-aos='zoom-in-up' />
                        </div>
                        <input type='text' name='subject' placeholder='Subject' data-aos='zoom-in-up' />
                        <textarea type='text' name='message' id='' cols='30' rows='10' data-aos='zoom-in-down'></textarea>
                        <button type='submit' data-aos='zoom-in-down'>Submit</button>
                    </form>
                </div>
                <div className='right p-20px'>
                    {contact.map((item, index) => ( //Adding index as a uniqu key
                        <div className='box text-silver' data-aos='zoom-in-down' key={index}>
                            <i>{item.icon}</i>
                             <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}