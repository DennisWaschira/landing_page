"use client";
import React from 'react'
import styles from "./HeroNav.module.css";


const HeroNav = () => {
  return (
     <div className={styles.hero_nav}>
  <div className={styles.hero_nav_cont}>
    <span className={styles.hero_nav_desc}>
      Trusted by:
    </span>
    <div className={styles.images_list}>
      <img className={styles.item} src="./Item2.png" alt="png" />
      <img className={styles.item} src="./Item5.png" alt="png" />
      <img className={styles.item} src="./Itemone.png" alt="png" />
      <img className={styles.item} src="./Item4.png" alt="png" />
      <img className={styles.item} src="./Item3.png" alt="png" />
    </div>
  </div>
</div>

  )
}

export default HeroNav