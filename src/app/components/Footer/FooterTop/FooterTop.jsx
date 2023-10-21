"use client";
import React from 'react'
import styles from "./FooterTop.module.css";
const FooterTop = () => {
  return (
     <div className={styles.footer_top}>
  <div className={styles.footer_top_cont}>
    <p>
      Our currency API is free for up to 1,000 monthly requests. Get your API key today
    </p>
    <button className={`${styles.btn_api} btn`}>GET FREE API KEY</button>
  </div>
</div>

  )
}

export default FooterTop