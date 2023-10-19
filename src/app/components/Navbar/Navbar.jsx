"use client";

import Image from "next/image";
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = ({ }) => {
    const [open,setOpen] = useState(false);
  return <div className="nav_bar main_width">
    <div className="nav_cont">

    
      <img src="./Link.png" alt="logo"/>
        
      <div className="menu_icons display">
        {open? <img src="./close.png" alt="close" onClick={()=>{setOpen((prev)=>(!prev))}}/> : <img src="./menu.png" alt="open" onClick={()=>{setOpen((prev)=>(!prev))}}/> }
      </div>
      {
        open ?
          <>
          <div className="nav_links">
      <span>Pricing</span>
      <span>Documentation</span>
      <span>FAQ</span>
      <span>Blog</span>
      <span className="status">
          <span className="status_badge"></span>
        <span>Status</span>
      </span>
      <span>Sign In</span>
      <span className= "btn">GET FREE API KEY</span>

      </div>
          </>
          :""
      }
    
      
    </div>
  </div>
}

export default Navbar;