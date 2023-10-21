import React from 'react'
import styles from "./InfoCard.module.css";
const InfoCard = () => {
  return (
    <div className={`${styles.info_card} main_width`}>
  <div className={styles.info_card_cont}>
    <div className={styles.inf0_item}>
      <h3>Update Every Minute</h3>
      <p>
        Obtain real-time, accurate and reliable currency exchange rate data for
        hundreds of worldwide currencies, updated as often as every 60 seconds.
      </p>
    </div>
    <div className={styles.inf0_item}>
      <h3>200+ Currencies</h3>
      <p>
        Our API is integrated with a number of highly reputable foreign exchange rate sources, offering the most recent accurate rates for 200+
        pairs.
      </p>
    </div>
    <div className={styles.inf0_item}>
      <h3>Simple, Quick & Reliable</h3>
      <p>
        Make use of a scalable infrastructure that can handle anything from a few requests a day up to thousands of API requests per second.
      </p>
    </div>
    <div className={styles.inf0_item}>
      <h3>No Credit Card Required</h3>
      <p>
        Integrate the API in under 10 minutes without the need for a credit card.
        You will get 1000 monthly requests for free; premium plans start at $10.
      </p>
    </div>
  </div>
</div>

  )
}

export default InfoCard