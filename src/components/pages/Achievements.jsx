import React from "react";
import { achievements } from "../data/dummydata";
import CountUp from "react-countup";

export const Achievements = () => {
  return (
    <>
      <div className="hero counter bg-secondaryBackground">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((item) => (
            <div className=" p-8 text-center" data-aos="zoom-in" key={item.title}>
              <i className="text-4xl text-white">{item.icon}</i>
              <h1 className=" py-4 heading md:text-4xl text-3xl font-bold text-primaryColor">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3 className="  md:text-sm text-sm  text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};




/* import React from "react"
import { achievements } from "../data/dummydata"
import CountUp from "react-countup"


export const Achievements = () => {
    return (
      <>
        <div className='hero counter'>
          <div className='container grid3 grid4'>
            {project.map((item) => (
              <div className='box' data-aos='zoom-in' key={item.title} >
                <i>{item.icon}</i>
                <h1 className='heading'>
                  <CountUp enableScrollSpy duration={2} end={item.num} />
                </h1>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  } */
