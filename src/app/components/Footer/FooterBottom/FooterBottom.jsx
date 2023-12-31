"use client";
import React from 'react'
import styles from "./FooterBottom.module.css";
const FooterBottom = () => {
  return (
    <div className={`${ styles.footer_bottom } main_width`}>
  <div className={styles.footer_bottom_cont}>
    <div className={styles.footer_left}>
      <img src="./Link.png" alt="logo" />
      <div className={styles.social_links}>
        <img src="./facebook.png" alt="" />
        <img src="./instagram.png" alt="" />
        <img src="./twitter.png" alt="" />
        <img src="./linkedin.png" alt="" />
        <img src="./youtube.png" alt="" />
        <img src="./github.png" alt="" />
      </div>
    </div>
    <div className={styles.footer_right}>
      <div className={styles.footer_item}>
        <h3>PRODUCT</h3>
        <div className={styles.footer_item_list}>
          <span>Pricing</span>
        </div>
      </div>
      <div className={styles.footer_item}>
        <h3>DOCS & HELP</h3>
        <div className={styles.footer_item_list}>
          <span>Documentation</span>
          <span>FAQS</span>
        </div>
      </div>
      <div className={styles.footer_item}>
        <h3>ACCOUNT</h3>
        <div className={styles.footer_item_list}>
          <span>Log In</span>
          <span>Forgot Password</span>
          <span>FREE SignUp</span>
        </div>
      </div>
      <div className={styles.footer_item}>
        <h3>GET IN TOUCH</h3>
        <div className={styles.footer_item_list}>
          <span>Contact</span>
        </div>
      </div>
      <div className={styles.footer_item}>
        <h3>ADDRESS</h3>
        <div className={styles.footer_item_list}>
          <span>Oppolzergasse 6/1/4, 1010</span>
          <span>Wien, Austria</span>
          <span>customercare@apilayer.com</span>
          <span>+43 316 231255</span>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.copyright}>
    <span>
      Imprint / Legal | Privacy | Terms | Cookie Preference | Sitemap
    </span>
    <span>
      © 2022 Exchagerate API, an APILayer product. All rights reserved.
    </span>
  </div>
</div>

  )
}

export default FooterBottom