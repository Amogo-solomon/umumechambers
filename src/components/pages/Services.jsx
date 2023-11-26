import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"
import { Footer } from "./Footer"

export const Services = () => {
  return (
    <>
        <section className="  bg-cover bg-center md:h-auto h-auto  w-full relative top-2 md:my-auto">
            <div className="abosolute inset-0 bg-center bg-fixed h-full"
            style={{ backgroundImage: 'url(/images/attorneys-bg.png' }}
            >
                {/* <Heading title="" /> */}
                <div className="text-3xl text-primaryColor font-bold text-center my-auto " >Services</div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 max-w-[90%]  mx-auto my-2">
                {services.map((item, desc) => ( /* using desc as unique ID */
                    <div className="box   p-4 rounded-xl top-2" data-aos='flip-left' key={desc}> {/*addign a unique key*/}
                        <i className="text-primaryColor" >{item.icon}</i>
                        <h3 class='text-primaryColor text-lg md:text-xl font-semibold'>{item.title}</h3>
                        <p className=" md:text-lg text-sm text-silver">{item.desc}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    </>
  )
}

