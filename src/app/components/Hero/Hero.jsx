import React from 'react'
import styles from './Hero.module.css';

const Hero = () => {
  return (
      <div className={`${ styles.hero} main_width`}>
  <div className={styles.hero_cont}>
    <div className={styles.hero_left}>
      <span className={styles.title_sm}>
        Currency Rates
      </span>
      <div className={styles.title_lg}>
        Real Time, Intraday & <br />
        Historical Market Data API
      </div>
      <div className={styles.description}>
        Free, easy-to-use REST API interface delivering <br/> currency exchange rate data
      </div>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <div className={styles.card_title}>
            1000 Monthly Request
          </div>
          <div className={styles.card_details}>
            Free Forex data for hundreds of <br />
            currencies around the world
          </div>
        </div>
        <div className={styles.card_right}>
          <span>FREE</span>
          <span>GET API KEY</span>
        </div>
      </div>
    </div>
    <div className={styles.hero_right}>
      <img src="./image 1.png" alt="" />
    </div>
  </div>
</div>

  )
}

export default Hero