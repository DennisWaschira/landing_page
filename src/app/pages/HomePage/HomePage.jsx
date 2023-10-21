"use client";

import React from 'react'
import styles from  "./HomePage.module.css";
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '@/app/components/Hero/Hero.jsx'
import HeroNav from '@/app/components/Hero/HeroNav/HeroNav.jsx'
import InfoCard from '@/app/components/Body/InfoCard/InfoCard.jsx'
import CodeCard from '@/app/components/Body/CodeCard/CodeCard'
import PriceCard from '@/app/components/Body/PriceCard/PriceCard'
import Footer from '@/app/components/Footer/Footer'

const HomePage = () => {
  return (
     <div className={styles.home_page}>
  <div className={styles.home_page_cont}>
    <div className={styles.home_page_top}>
      <div className={styles.top_cont}>
        <Navbar />
        <Hero />
        <HeroNav />
      </div>
    </div>
    <div className={styles.home_page_center}>
      <InfoCard />
      <CodeCard />
      <PriceCard />
    </div>
    <div className={styles.home_page_bottom}>
      <Footer />
    </div>
  </div>
</div>

  )
}

export default HomePage