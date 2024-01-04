// Sidebar.tsx
import React from "react";

import Nav from "./nav";
import { Link } from "@remix-run/react";

const Sidebar: React.FC = () => {

  return (




     <div className="sidebar" >
      <Nav/>
      
        <ul >
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#technology">Technology</Link>
          </li>
          <li>
            <Link to="#contact">Contact Us</Link>
          </li>
          <li>
            <Link to="#about">About Us</Link>
          </li>
          <li>
            <Link to="#products">Products</Link>
          </li>
        </ul>
      </div>


      
    
  );
};

export default Sidebar;
