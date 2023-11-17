import React from "react";
import { testimonials }  from "../data/dummydata";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="testimonials hero py-12">
        <div className="container mx-auto px-4 max-w-[90%]">
          <Slider {...settings}>
            {testimonials.map((val, index) => (
              <div className="bg-white p-8 rounded-md shadow-lg" key={index}>
                <div className="text-3xl text-gray-600">
                  <FormatQuoteIcon />
                </div>
                <p className="md:text-lg text-sm  text-gray-700 mt-4">{val.text}</p>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <img src={val.image} alt='' className="h-12 w-12 rounded-full" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primaryColor">{val.name}</h3>
                    <label className="text-gray-500">{val.post}</label>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;



/* import React from "react"
import { testimonials } from "../data/dummydata"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


export const Testimonials = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
  return (
  <>
    <section className="testimonials hero">
        <div className="container">
        <Slider {...settings}>
            {testimonials.map((val, index) => (
                <div className="box" key={index}> 
                    <i>
                        <FormatQuoteIcon />
                    </i>
                     <p data-aos='zoom-out-down'>{val.text}</p>
                    <div className="img" data-aos='zoom-out-right'>
                        <img src={val.image} alt='' />
                    </div>
                    <h3 data-aos='zoom-out-left'>{val.name}</h3>
                    <label data-aos='zoom-out'>{val.post}</label> 
                </div>
            ))}
        </Slider>
        </div>
    </section>
  </>
  )
}
 */