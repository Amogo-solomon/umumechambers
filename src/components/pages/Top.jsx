import React from 'react';
import { top } from '../data/dummydata';
import logo from '../data/images/logo.png';

export const Top = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-[90%] mx-auto px-4 my-2 text-white text-xs">
      <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center md:space-x-2">
        <img className="text-primaryColor" src={logo} alt="" data-aos="zoom-in-right" />
        {top.map((val, k) => (
          <div key={k} className="text-center md:text-left">
            <h className="text-white">{val.name1}</h>
            <h2 className="text-primaryColor">{val.name2}</h2>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        {top.map((val, k) => (
          <div key={k} className="text-center md:text-left">
            <i className="text-primaryColor space-x-4 md:text-xs">{val.icon}</i>
            <h>{val.test1}</h>
            <h>{val.text2}</h>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Here are the changes made to make the Top component responsive:

flex-col and md:flex-row: These classes are used to control the flex direction, ensuring that content stacks vertically on small screens and aligns horizontally on medium screens and above.

**mb-4, md:mb-0, space-x-2, space-y-4, md:space-y-0, and md:space-x-4: These classes control margin, spacing between elements, and alignment based on screen size. For example, mb-4 adds margin at the bottom on small screens, and md:mb-0 removes it on medium screens and above.

By applying these responsive classes, your Top component should adapt well to various screen sizes. Test it on different devices and screen sizes to ensure it works as expected. Adjust the classes and spacing as needed to fine-tune the layout to your specific design requirements.

The hidden class is added to the div containing the icon, test1, and test2 that you want to hide on smaller screens. This class hides the content on screens smaller than the medium (md) breakpoint.
By using the hidden class with the md prefix, you hide the content on screens smaller than the medium size, making it responsive to different screen sizes. The content will be displayed on medium screens and above and hidden on smaller screens. Adjust the breakpoint classes as needed for your specific design requirements. */