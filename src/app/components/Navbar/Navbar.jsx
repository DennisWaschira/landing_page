"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import React, { useState } from "react";

const Navbar = ({ }) => {
    const [open,setOpen] = useState(false);
  return (
    <div className={`${styles.nav_bar} main_width`}>
  <div className={styles.nav_cont}>
    <img src="./Link.png" alt="logo" />
    <div className={`${styles.menu_icons} ${styles.display}`}>
      {open ? (
        <img src="./close.png" alt="close" onClick={() => { setOpen(prev => !prev) }} />
      ) : (
        <img src="./menu.png" alt="open" onClick={() => { setOpen(prev => !prev) }} />
      )}
    </div>
    <div className={styles.nav_links} id={open ? "hidden" : ""}>
      <span>Pricing</span>
      <span>Documentation</span>
      <span>FAQ</span>
      <span>Blog</span>
      <span className={styles.status}>
        <span className={styles.status_badge}></span>
        <span>Status</span>
      </span>
      <span>Sign In</span>
      <span className={`${styles.btn} btn`}>GET FREE API KEY</span>
    </div>
  </div>
</div>



  )
}

export default Navbar;