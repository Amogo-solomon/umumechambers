import { Menu } from "@mui/icons-material"
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/logo.png"

export const Header = () => {
  const [responsive, setResponsive] = useState(true); // Set the initial state to true
  
  //Function to handle menu item click
  const handleMenuItemClick = () => {
    // Automaticall hide the menu on small screens
    if (window.innerWidth <= 768) {
        setResponsive(true);
    }
  };
  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'>
            <img src={logo} alt=''  data-aos='zoom-in-right' />
          </div>
          <div className={responsive ? "nav" : "nav showMenu"}>
            {navlink.map((links, i) => (
              <Link to={links.url}
               key={i} data-aos='zoom-in-left'
                onClick={handleMenuItemClick} // Call the function on click
            >
                {links.text}
              </Link>
            ))} 
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className='icon'></Menu> 
          </button>
        </div>
      </header>
    </>
  );
}


/* State Variable for Responsive Menu

Default (GPT-3.5)


ChatGPT

Certainly! In the given code, the line const [responsive, setResponsive] = useState(false) is a declaration of a state variable using the useState hook in a React functional component.

Here's a breakdown of what's happening:

1. const: This keyword is used to declare a constant variable, which means its value cannot be reassigned after it's initially set.

2. [responsive, setResponsive]: This is array destructuring syntax. It allows you to extract values from an array and assign them to separate variables. In this case, it's extracting two values from the array returned by the useState hook.

3. useState(false): The useState hook is a React feature that allows functional components to manage state. It returns an array containing two values: the current state value (in this case, responsive) and a function (in this case, setResponsive) to update that state.

- responsive: This variable holds the current state value. In this case, it represents whether a responsive menu should be shown or not. The initial value is set to false.

- setResponsive: This function is used to update the state value of responsive. When you call this function and pass a new value (e.g., setResponsive(true)), React will re-render the component and update the state.

- So, in summary, responsive is a state variable that tracks whether a responsive menu should be displayed or not. setResponsive is the function used to update the value of responsive. If you call setResponsive(true), for example, the menu would be set to responsive mode.

 */