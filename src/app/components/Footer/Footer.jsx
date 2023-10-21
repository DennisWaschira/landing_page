import React from 'react'
import styles from "./Footer.module.css";
import FooterTop from './FooterTop/FooterTop.jsx'
import FooterBottom from './FooterBottom/FooterBottom.jsx'
const Footer = () => {
  return (
      <div className={styles.footer}>
  <div className={styles.footer_cont}>
    <FooterTop /> 
    <FooterBottom /> 
  </div>
</div>

  )
}

export default Footer