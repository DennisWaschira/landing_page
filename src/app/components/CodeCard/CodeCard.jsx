import React from 'react'
import styles from "./CodeCard.module.css";
const CodeCard = () => {
  return (
    <div className={styles.code_card}>
  <div className={styles.code_card_cont}>
    <div className={styles.code_details}>
      <h3>The most complete and straightforward JSON API for your exchange rate data needs</h3>
      <p>Our foreign exchange rate data API will give you instant access to a host of valuable currency pairs right from the start.</p>
    </div>
    <div className={styles.code_box}>
      <img src="./codebox.png" alt="" />
    </div>
  </div>
</div>

  )
}

export default CodeCard