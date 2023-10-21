import React from 'react'
import styles from "./PriceItem.module.css";
const PriceItem = () => {
  const planOptions = ["Lorem ","ipsum dolor ","sit amet ","consectetur adipisicing", "elit.", "Temporibus ","nihil eum."];
  return (
     <div className={styles.price_item}>
  <div className={styles.price_item_cont}>
    <div className={styles.price_item_top}>
      <h3>Plan</h3>
      <div className={styles.item_des}>
        <div>
          <span>$ 10</span>
          <span>/month</span>
        </div>
        <span style={{ fontSize: "10px" }}>No Hidden Charges</span>
      </div>
      <div className={styles.info}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil eum.
      </div>
    </div>
    <div className={styles.price_item_bottom}>
      <button className={styles.btn_subscribe}>SUBSCRIBE</button>
    </div>
  </div>
  <div className={styles.plan_options}>
    {
      planOptions.map((option, index) => (
        <span key={index}>{option}</span>
      ))
    }
  </div>
</div>

  )
}

export default PriceItem